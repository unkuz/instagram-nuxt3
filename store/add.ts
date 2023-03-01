import { defineStore } from 'pinia'
import { useGlobalStore } from './global'

export const useAddStore = defineStore('add', {
  state: () => ({
    
    isShow: false,
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      const globalStore = useGlobalStore()
      if (!_isNil(val)) {
        if (!val) {
          globalStore.setSection(globalStore.prevSection)
        }
        this.isShow = val
      }
    },
  },
})
