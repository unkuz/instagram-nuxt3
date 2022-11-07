import { defineStore } from 'pinia'

interface IState { 
  value:string,
  isFocus:boolean
}



const state = ():IState => ({
  value: '',
  isFocus: false,
})
const getters = {
  getValue: (state:IState) => state.value,
  getIsFocus: (state:IState) => state.isFocus,
  getIsSearchHaveValue: (state:IState) => !!state.value,
  getIsShowSearchToolkit: (state:IState) => state.isFocus && Boolean(state.value),
}
const actions = {
  setValue(value:string) {
    this.value = value
  },
  setIsFocus(isFocus:boolean) {
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
