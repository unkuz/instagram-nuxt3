import { defineStore } from 'pinia'
import { timeLine } from '~~/mocks/reelTimeLine'
import { TimeLine } from '~~/models/timline'

interface TimeLineState {
  timeline: TimeLine[]
  hasErr: boolean
  errors: {}
}

const state = (): TimeLineState => ({
  timeline: [...timeLine],
  hasErr: false,
  errors: {},
})

const getters = {}

const actions = {
  setToggleLikePost(id) {
    this.timeline.forEach((i) => {
      if (i.id === id) {
        i.has_liked = !i.has_liked
        i.like_count = i.has_liked ? i.like_count + 1 : i.like_count - 1
      }
    })
  },
}

export const useTimeLineStore = defineStore('timeline', {
  state,
  getters,
  actions,
})
