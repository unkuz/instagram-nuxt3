import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    value: '',
    isFocus: false,
  }),
  getters: {
    getIsSearchHaveValue: (state) => !!state.value,
    getIsShowSearchToolkit: (state) => state.isFocus && Boolean(state.value),
  },
  actions: {
    setValue(value: string) {
      this.value = value
    },
    setIsFocus(isFocus: boolean) {
      this.isFocus = isFocus
    },
    clearValue() {
      this.value = ''
    },
  },
})
