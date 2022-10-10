import { defineStore } from 'pinia'
import { SELECT_TYPE } from '@@/constants/screens/account'

interface ProfileState {
  select: SELECT_TYPE
  isShowFollowing: boolean
  isShowFollowers: boolean
}

const state = (): ProfileState => ({
  select: SELECT_TYPE.ALL,
  isShowFollowing: false,
  isShowFollowers: false,
})

const getters = {
  getSelect: (state: ProfileState) => state.select,
  getIsShowFollowing: (state: ProfileState) => state.isShowFollowing,
  getIsShowFollowers: (state: ProfileState) => state.isShowFollowers,
}

const actions = {
  setSelect(select: SELECT_TYPE) {
    this.select = select
  },
  setIsShowFollowing(isShowFollowing: boolean) {
    this.isShowFollowing = isShowFollowing
  },
  setIsShowFollowers(isShowFollowers: boolean) {
    this.isSHowFollowers = isShowFollowers
  },
}

export const useProfileStore = defineStore('profileStore', {
  state,
  getters,
  actions,
})
