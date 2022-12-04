import { defineStore } from 'pinia'

interface IState {
  darkMode: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): IState => ({
    darkMode: false,
  }),
  getters: {},
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})
