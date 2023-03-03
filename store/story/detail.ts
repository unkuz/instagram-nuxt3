import { defineStore } from 'pinia'

export const useStoryDetailStore = defineStore('storyDetail', {
  state: () => ({
    isShow: false,
    data: {},
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(val: any) {
      if (_isNil(val)) {
        return
      }

      this.data = val
    },
    toggle(val?: boolean) {
      if (_isBoolean(val)) {
        this.isShow = val
      } else {
        this.isShow = !this.isShow
      }
    },
  },
})
