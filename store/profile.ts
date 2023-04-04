import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'

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
    async update(val: any) {
      const idUser = this.data[0].id

      const data = _omitBy(val, (i) => _isNil(i))

      console.log('DATA', data)
      try {
        const formData = new FormData()

        _each(data, (val, key) => {
          formData.append(key, val)
        })
        formData.append('password', 'cuz')

        console.log('FRORM', formData)

        await axios.put(APP_API.USER.UPDATE_PROFLE(idUser), formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
      } catch (e) {}
    },
  },
})
