import { defineStore } from 'pinia'

export const useExploreStore = defineStore('explore', {
  state: () => ({
    data: [],
  }),
  getters: {
    list: (state) => _chunk(state.data, 3),
  },
  actions: {
    save(val) {
      if (_isNil(val)) {
        return
      }
      this.data = val
    },
  },
})
