import { defineStore } from 'pinia'
import { ITimeLine } from '@/models'
import { IFilePost, IStateStore } from '@/type'
import { timeLine } from '@/mocks'
import { ToastTypeEnum, useAddStore, useAuthStore, useSlashStore, useToastStore } from '@/store'
import { axios } from '@/services/axios'
import { APP_API, BASE_URL_API } from '@/apis'
import { isImageOrVideo } from '@/utils'
import { TagsWithInnerContent } from '@unhead/shared'

type TState = IStateStore<ITimeLine[]>

export const useFeedStore = defineStore('feed', {
  state: (): any => ({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: ITimeLine[] | null) {
      if (data) {
        this.data = data
      }
    },
    async setToggleLike(id: number) {
      const slashStore = useSlashStore()
      const toastStore = useToastStore()
      try {
        await axios.post(APP_API.FEED.like, { feed: id })
        this.data.forEach((i: ITimeLine) => {
          if (i.id === id) {
            if (i.has_liked) {
              i.has_liked = false
              slashStore.setHideSlash()
            } else {
              i.has_liked = true
              slashStore.setShowAnimation('love')
            }

            i.like_count = i.has_liked ? i.like_count + 1 : i.like_count - 1
          }
        })
      } catch (e) {
        console.log('e', e)
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: 'Somthing wrong happen !!',
        })
      }
    },
    async setToggleSave(id: number) {
      await axios.post(APP_API.FEED.save, { feed: id })
      this.data.forEach((i: ITimeLine) => {
        if (i.id === id) {
          i.is_saved = !i.is_saved
        }
      })
    },
    comment(id, { text, id: commentId, commentReplyId }) {
      const authStore = useAuthStore()
      const { user_name, profile_pic_url } = authStore.data.user
      const idx = this.data.findIndex((i) => i.id === id)

      const data = {
        text,
        created_at: new Date().getTime(),
        user: {
          pk: '',
          user_name: user_name,
          full_name: '',
          is_private: '',
          profile_pic_url: `${BASE_URL_API}` + '/' + profile_pic_url,
        },
        comment_like_count: 0,
        reply: [],
        id: commentId,
      }

      if (commentReplyId) {
        try {
          axios.post(APP_API.FEED.COMMENT, {
            content: text,
            feed: id,
            comment_id: commentReplyId,
          })
          const idxCmRep = this.data[idx].comments.findIndex((i) => i.id === commentReplyId)
          this.data[idx].comments[idxCmRep].reply.push(data)
        } catch (e) {}
      } else {
        try {
          axios.post(APP_API.FEED.COMMENT, {
            content: text,
            feed: id,
          })
          this.data[idx].comments.push(data)
        } catch (e) {}
      }
    },
    async addFeed(val: { media: IFilePost[]; caption: string; tags: string[] }) {
      const addStore = useAddStore()
      const toastStore = useToastStore()

      console.log(val)

      let images = [] as File[]
      let videos = [] as File[]
      if (val.media?.length) {
        val.media.forEach((i) => {
          const type = isImageOrVideo(i.file)
          if (type === 'image') {
            images.push(i.file)
          } else {
            if (type === 'video') {
              videos.push(i.file)
            }
          }
        })
      }

      const formData = new FormData()
      images.forEach((i) => {
        formData.append('images', i)
      })
      videos.forEach((i) => {
        formData.append('videos', i)
      })

      formData.append('caption_text', val.caption)
      val.tags.forEach((i) => {
        formData.append('tags', i)
      })

      try {
        await axios.post(APP_API.FEED.create, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        addStore.toggle(false)
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Post successfully',
        })
        const { data } = await axios.get(APP_API.FEED.list)
        this.data = data
      } catch (e) {
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: 'Something wrong or u are upload so much media',
        })
      }
    },
  },
})
