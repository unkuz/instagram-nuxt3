import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    files: [] as FileList[],
    listBlobs: [] as string[],
  }),
  getters: {},
  actions: {
    setFiles(files: FileList) {
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
  },
})
