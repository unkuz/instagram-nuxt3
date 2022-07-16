import { defineStore } from 'pinia'
import { stories } from '~~/mocks/stories'

const state = () => ({
  stories: [...stories],
})

const getters = {}
const actions = {}

export const useStoriesStore = defineStore('stories', {
  state,
  getters,
  actions,
})
