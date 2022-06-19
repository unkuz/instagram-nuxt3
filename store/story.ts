import { defineStore } from 'pinia'

const state = () => ({
  isShowStory: false,
})

const getters = {
  getIsShowStory: (state) => state.isShowStory,
}

const actions = {
  setIsShowStory(value) {
    this.isShowStory = value
  },
}

export const useStoryStore = defineStore('story', {
  state,
  getters,
  actions,
})
