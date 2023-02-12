import { defineStore } from 'pinia'
import { inboxDetail } from '@/mocks'
import { useAuthStore } from './auth'

export const useInboxDetailStore = defineStore('inboxDetail', {
  state: () => ({
    data: [...inboxDetail],
    detail: {
      replying: true,
    },
  }),
  getters: {},
  actions: {
    reply(val: string) {
      if (!val.trim()) {
        return
      }
      const authStore = useAuthStore()
      const {
        data: { userName, avatar },
      } = authStore
      let _data = this.data.slice(0)
      _data.push({
        user: {
          id: userName,
          username: userName,
          full_name: userName,
          profile_pic_url: avatar,
          friendship_status: {
            following: true,
            outgoing_request: false,
          },
        },
        message: val,
      })
      this.data = _data
    },
  },
})
