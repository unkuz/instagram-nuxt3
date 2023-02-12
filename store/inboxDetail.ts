import { defineStore } from 'pinia'
import { inboxDetail } from '@/mocks'
import { useAuthStore } from './auth'

export const useInboxDetailStore = defineStore('inboxDetail', {
  state: () => ({
    data: [...inboxDetail],
  }),
  getters: {},
  actions: {
    reply(val: string) {
      const authStore = useAuthStore()
      const {
        data: { userName, avatar },
      } = authStore
      this.data.push({
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
    },
  },
})
