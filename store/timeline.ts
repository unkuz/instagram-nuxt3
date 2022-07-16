import { defineStore } from 'pinia'
import { timeLine } from '~~/mocks/reelTimeLine'
import { TimeLine } from '~~/models/timline'

interface TimeLineState {
  timeline: TimeLine[]
  hasErr: boolean
  error: {}
}

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
