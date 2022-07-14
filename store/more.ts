import { defineStore } from 'pinia'

const state = () => ({ isShow: false })

const getters = {}
const actions = {
  setHidden() {
    this.isShow = false
  },
  toggleSHow() {
    this.isShow = !this.isShow
  },
  setShow() {
    this.isShow = true
  },
}

export const useMoreStore = defineStore('more', {
  state,
  getters,
  actions,
})
