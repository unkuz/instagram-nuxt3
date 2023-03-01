import { defineStore } from 'pinia'
import { SELECT_TYPE } from '@/constants/screens/account'

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
    // setSelect(select: SELECT_TYPE) {
    //   this.select = select
    // },
    // setIsShowFollowing(isShowFollowing: boolean) {
    //   this.isShowFollowing = isShowFollowing
    // },
    // setIsShowFollowers(isShowFollowers: boolean) {
    //   this.isShowFollowers = isShowFollowers
    // },
  },
})
