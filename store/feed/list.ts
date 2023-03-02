import { defineStore } from 'pinia'
import { ITimeLine } from '@/models'
import { IStateStore } from '@/type'
import { timeLine } from '@/mocks'
import { useAddStore, useSlashStore, useFeedStore } from '@/store'
import { axios } from '~~/services/axios'
import { APP_API } from '~~/apis'
import { isImageOrVideo } from '@/utils'

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
    },
    async setToggleSave(id: number) {
      await axios.post(APP_API.FEED.save, { feed: id })
      this.data.forEach((i: ITimeLine) => {
        if (i.id === id) {
          i.is_saved = !i.is_saved
        }
      })
    },
    comment(id, { text, userName, userImg, id: commentId, commentReplyId }) {
      const idx = this.data.findIndex((i) => i.id === id)

      const data = {
        text,
        created_at: new Date().getTime(),
        user: {
          pk: '',
          username: userName,
          full_name: '',
          is_private: '',
          profile_pic_url: userImg,
        },
        comment_like_count: 0,
        reply: [],
        id: commentId,
      }

      if (commentReplyId) {
        const idxCmRep = this.data[idx].comments.findIndex((i) => i.id === commentReplyId)
        this.data[idx].comments[idxCmRep].reply.push(data)
      } else {
        this.data[idx].comments.unshift(data)
      }
    },
    async addFeed(val: { media: FileList; caption: string }) {
      const addStore = useAddStore()

      console.log(val)

      let images = [] as File[]
      let videos = [] as File[]
      if (val.media?.length) {
        Array.from(val.media).forEach((i) => {
          const type = isImageOrVideo(i)
          if (type === 'image') {
            images.push(i)
          } else {
            if (type === 'video') {
              videos.push(i)
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

      try {
        await axios.post(APP_API.FEED.create, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        addStore.toggle(false)
        const { data } = await axios.get(APP_API.FEED.list)
        this.data = data
      } catch (e) {}
    },
  },
})
