import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'

export const useUserAuthFollowerStore = defineStore('user-auth-follower', {
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    async fetch() {
      const authStore = useAuthStore()
      const user_name = authStore.data.user?.user_name

      try {
        const { data, status } = await axios.get(APP_API.FOLLOW.FOLLOWER_BY_USER(user_name))

        if (status === 200) {
          this.data = data
        }
      } catch (e) {}
    },
  },
})
