import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { useFeedStore } from './feed/list'
import { ToastTypeEnum, useToastStore } from './toast'

export enum TypeMoreEnum {
  FEED,
  NONE,
}

export const useMoreStore = defineStore('more', {
  state: () => ({
    isShow: false,
    type: TypeMoreEnum.NONE,
    state: {
      feed: {},
    },
  }),
  getters: {},
  actions: {
    toggle(val?: boolean) {
      if (_isBoolean(val)) {
        this.isShow = val
      } else {
        this.isShow = !this.isShow
      }
    },
    set(_data: { type: TypeMoreEnum; data: any }) {
      const { type, data } = _data
      this.type = type

      if (type === TypeMoreEnum.FEED) {
        this.state.feed = data
      }

      this.isShow = true
    },
    async delFeed(idFeed: number) {
      const feedStore = useFeedStore()
      const toastStore = useToastStore()
      try {
        await axios.delete(`${APP_API.FEED.list}${idFeed}/`)
        const { data } = await axios.get(APP_API.FEED.list)
        feedStore.save(data)
        this.isShow = false
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Delete successfully',
        })
      } catch (e) {
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: e.response?.data?.detail,
        })
      }
    },
  },
})
