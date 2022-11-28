import { defineStore } from 'pinia'

interface IState {
  darkMode: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): IState => ({
    darkMode: true,
  }),
  getters: {},
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})
