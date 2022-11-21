import { defineStore } from 'pinia'


export const usePostStore = defineStore('postStore', {
  state:() => ({
    files: [] as File[],
    listBlobs: [] as string[],
  }),
  getters:{},
  actions:{
    setFiles(files:File[]) {
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
