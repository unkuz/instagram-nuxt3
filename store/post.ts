import { defineStore } from 'pinia'

const state = () => ({
  files: [],
})

const getters = {
  getFiles: (state) => state.files,
}

const actions = {
  setFiles(files) {
    this.files = files
  },
}

export const usePostStore = defineStore('postStore', {
  state,
  getters,
  actions,
})
