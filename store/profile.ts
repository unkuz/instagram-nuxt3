import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { ToastTypeEnum, useToastStore } from './toast'
import { sleep } from '@/utils'

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
    isOpenEditProfile: false,
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
    toggleEditProfile(val: boolean) {
      if (_isBoolean(val)) {
        this.isOpenEditProfile = val
        return
      }
      return (this.isOpenEditProfile = !this.isOpenEditProfile)
    },
    async update(val: any) {
      const toastStore = useToastStore()
      const idUser = this.data[0].id
      const data = _omitBy(val, (i) => _isNil(i))
      try {
        const formData = new FormData()
        _each(data, (val, key) => {
          formData.append(key, val)
        })
        formData.append('password', 'cuz')
        const { status } = await axios.put(APP_API.USER.UPDATE_PROFLE(idUser), formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        if (status === 200) {
          toastStore.pushTimmer({
            type: ToastTypeEnum.SUCCESS,
            content: 'Edit Profile successfully!',
          })
          await sleep(1000)
          this.isOpenEditProfile = false
        }
      } catch (e) {
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: 'Something went wrong!',
        })
      }
    },
  },
})
