import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export type TData = {
  id: number
  user_name: string
  name: string
  bio: string
  website?: any
  phone_number?: any
  profile_pic_url: string
  cover_pic_url: string
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    data: [] as TData[],
  }),
  getters: {
    profile: (state) => {
      return state.data?.[0]
    },
  },
  actions: {
    save(val: any) {
      this.data = val
    },
    async updateProfile(val: any) {
      const authStore = useAuthStore()
      const idUser = authStore.data.user.id
      try {
        await axios.put(APP_API.USER.UPDATE_PROFLE(idUser))
      } catch (e) {}
    },
  },
})
