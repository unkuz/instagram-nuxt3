import { defineStore } from 'pinia'
import { SELECT_TYPE } from '@/constants/screens/account'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    data:[]
  }),
  getters: {
    profile:(state)=>{
        return state.data?.[0]
    }
  },
  actions: {
    setProfile(val:any){
        this.data = val
    }
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
