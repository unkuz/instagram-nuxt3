import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'
import { useSuggestionStore } from './suggestion'

export const useFollowStore = defineStore('user-follow', {
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    async follow(userId: number) {
      const suggestionStore = useSuggestionStore()

      try {
        const { data, status } = await axios.post(APP_API.FOLLOW.FOLLOW, {
          followee: userId,
        })

        if (status === 201) {
          suggestionStore.data.forEach((i: any) => {
            if (i.id === userId) {
              i.is_follow = true
              return
            }
          })
        }
      } catch (e) {}
    },
    async unfollow(userName: string) {
      const suggestionStore = useSuggestionStore()

      try {
        const { status } = await axios.delete(APP_API.FOLLOW.UNFOLLOW(userName))

        if (status === 204) {
          suggestionStore.data.forEach((i: any) => {
            if (i.user_name === userName) {
              i.is_follow = false
              return
            }
          })
        }
      } catch (e) {}
    },
  },
})
