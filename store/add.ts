import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { IFilePost, TypePostEnum } from '@/type'
import { defineStore } from 'pinia'
import { useGlobalStore } from './global'
import { ToastTypeEnum, useToastStore } from './toast'

export const useAddStore = defineStore('add', {
  state: () => ({
    isShow: false,
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      const globalStore = useGlobalStore()
      if (!_isNil(val)) {
        if (!val) {
          globalStore.setSection(globalStore.prevSection)
        }
        this.isShow = val
      }
    },
    async post(val: { media: IFilePost[]; caption: string; tags: string[]; typePost: any }) {
      const addStore = useAddStore()
      const toastStore = useToastStore()

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

      let END_POINT = ''
      switch (val.typePost) {
        case TypePostEnum.FEED:
          END_POINT = APP_API.FEED.create
          break
        case TypePostEnum.REEL:
          END_POINT = APP_API.REEL.LIST
          break
        case TypePostEnum.STORY:
          END_POINT = APP_API.STORY.CREATE
          break
      }

      if (!END_POINT) {
        return
      }

      try {
        await axios.post(END_POINT, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        addStore.toggle(false)
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Post successfully',
        })
        const { data } = await axios.get(APP_API.FEED.list)
      } catch (e) {
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: 'Something wrong or u are upload so much media',
        })
      }
    },
  },
})
