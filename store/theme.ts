import { defineStore } from 'pinia'

interface IStateStore {
  darkMode: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): IStateStore => ({
    darkMode: false,
  }),
  getters: {},
  actions: {
    toggleDarkMode(val?: boolean) {
      if (_isBoolean(val)) {
        return (this.darkMode = val)
      }
      this.darkMode = !this.darkMode
    },
  },
  persist: true,
})
