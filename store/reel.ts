import { isNil } from 'lodash'
import { defineStore } from 'pinia'

export const useReelStore = defineStore('reel', {
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    save(val: any) {
      if (isNil(val)) {
        return
      }
      this.data = val
    },
  },
})
