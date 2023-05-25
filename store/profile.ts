import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { ToastTypeEnum, useToastStore } from './toast'
import { sleep } from '@/utils'
import { useAuthStore } from './auth'
import { ProfileSectionEnum } from '@/type'

export type TData = {
  id: number
  user_name: string
  name: string
  bio: string
  website?: any
  phone_number?: any
  profile_pic_url: string
  cover_pic_url: string
  is_follow: boolean
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    data: {} as TData,
    isOpenEditProfile: false,
    currentProfileSection: ProfileSectionEnum.POST,
    isPending: false,
  }),
  getters: {},
  actions: {
    async fetch(userName: string) {
      try {
        const { data, status } = await axios.get(APP_API.USER.detail, {
          params: {
            user_name: userName,
          },
        })

        if (status === 200) {
          this.data = data
        }
      } catch (e) {}
    },
    async follow(userId: number) {
      try {
        const { data, status } = await axios.post(APP_API.FOLLOW.FOLLOW, {
          followee: userId,
        })

        if (status === 201) {
          this.data.is_follow = true
        }
      } catch (e) {}
    },
    async unfollow(userName: string) {
      try {
        const { status } = await axios.delete(APP_API.FOLLOW.UNFOLLOW(userName))

        if (status === 204) {
          this.data.is_follow = false
        }
      } catch (e) {}
    },

    save(val: any) {
      if (_isObject(val?.[0])) {
        this.data = val[0] as TData
      }
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
      const authStore = useAuthStore()
      const idUser = this.data.id
      const data = _omitBy(val, (i) => _isNil(i))
      try {
        const formData = new FormData()
        _each(data, (val, key) => {
          formData.append(key, val)
        })
        const { status, data: _data } = await axios.put(
          APP_API.USER.UPDATE_PROFLE(idUser),
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )

        if (status === 200) {
          toastStore.pushTimmer({
            type: ToastTypeEnum.SUCCESS,
            content: 'Edit Profile successfully!',
          })
          this.data = { ...this.data, ..._data }
          await sleep(1000)
          this.isOpenEditProfile = false
          authStore.data.user = _pick(_data, ['cover_pic_url', 'profile_pic_url', 'user_name'])
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
