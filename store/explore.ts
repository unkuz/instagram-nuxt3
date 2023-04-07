import { defineStore } from 'pinia'

export const useExploreStore = defineStore('explore', {
  state: () => ({
    data: [],
  }),
  getters: {
    list: (state) => state.data.reverse(),
  },
  actions: {
    save(val: []) {
      if (!_isNil(val)) {
        this.data = val
      }
    },
  },
})
