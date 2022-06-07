import { defineStore } from 'pinia'
import { SELECT_TYPE } from '~~/constants/screens/account'

const state = () => ({
  select: SELECT_TYPE.ALL,
})

const getters = {
  getSelect: (state) => state.select,
}

const actions = {
  setSelect(select) {
    this.select = select
  },
}

export const useProfileStore = defineStore('profileStore', {
  state,
  getters,
  actions,
})
