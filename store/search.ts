import { defineStore } from 'pinia'

const state = () => ({
  value: '',
  isFocus: false,
})
const getters = {
  getValue: (state) => state.value,
  getIsFocus: (state) => state.isFocus,
  getIsSearchHaveValue: (state) => !!state.value,
  getIsShowSearchToolkit: (state) => state.isFocus && Boolean(state.value),
}
const actions = {
  setValue(value) {
    this.value = value
  },
  setIsFocus(isFocus) {
    this.isFocus = isFocus
  },
  clearValue() {
    this.value = ''
  },
}

export const useSearchStore = defineStore('searchStore', {
  state,
  getters,
  actions,
})
