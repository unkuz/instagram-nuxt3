import { defineStore } from 'pinia'

interface IState {
  darkMode: boolean
}

const state = (): IState => ({
  darkMode: true,
})

const getters = {}

const actions = {
  toggleDarkMode() {
    this.darkMode = !this.darkMode
  },
}

export const useThemeStore = defineStore('theme', {
  state,
  getters,
  actions,
})
