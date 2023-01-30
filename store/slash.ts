import { defineStore } from 'pinia'

interface IState {
  animation: string | null
  show: boolean
}

export const useSlashStore = defineStore('slash', {
  state: (): IState => ({
    animation: '',
    show: false,
  }),
  getters: {},
  actions: {
    setShowAnimation(val: string) {
      this.animation ||= val
      this.show = true
    },
    setHideSlash() {
      this.animation = ''
      this.show = false
    },
  },
})
