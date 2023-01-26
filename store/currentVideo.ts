import { defineStore } from 'pinia'

interface IData {
  src: string
  isPlaying: boolean
  startTime: number
  ready: boolean
}

interface IState {
  data: IData
}

const state = (): IState => ({
  data: {
    src: '',
    isPlaying: false,
    startTime: 0,
    ready: false,
  },
})

const getters = {}

const actions = {
  set(data: IData) {
    this.data = data
  },
  setReady() {
    this.data.ready = true
  },
}

export const useCurrentVideoStore = defineStore('currentVideo', {
  state,
  getters,
  actions,
})
