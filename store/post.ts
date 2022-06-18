import { defineStore } from 'pinia'

const state = () => ({
  files: [],
  listBlobs: [],
})

const getters = {
  getFiles: (state) => state.files,
  getBlobs: (state) => state.listBlobs,
  getCurrentIndexSlide: (state) => (state.files.length > 0 ? 0 : ''),
}

const actions = {
  setFiles(files) {
    this.files = [...this.files, ...Array.from(files)]
    this.listBlobs = this.files.map((i) => URL.createObjectURL(i))
  },
  clearFiles() {
    this.files = []
    this.listBlobs.forEach((i) => {
      URL.revokeObjectURL(i)
    })
    this.listBlobs = []
  },
}

export const usePostStore = defineStore('postStore', {
  state,
  getters,
  actions,
})
