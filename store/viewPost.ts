import { defineStore } from 'pinia'

const state = () => ({
  isShow: false,
})
const getters = {
  getIsShow: (state) => state.isShow,
}

const actions = {
  setIsShow(value) {
    this.isShow = value
  },
}

export const useViewPostStore = defineStore('viewPostStore', {
  state,
  getters,
  actions,
})
