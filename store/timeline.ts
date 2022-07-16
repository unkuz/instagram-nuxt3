import { defineStore } from 'pinia'
import { timeLine } from '~~/mocks/reelTimeLine'

const state = () => ({
  timeline: [...timeLine],
  hasErr: false,
  errors: {},
})

const getters = {}

const actions = {}

export const useTimeLineStore = defineStore('timeline', {
  state,
  getters,
  actions,
})
