import { defineStore } from 'pinia'
import { suggests } from '~~/mocks/suggets'

const state = () => ({
  suggestion: [...suggests],
})

const getters = {}

const actions = {}

export const useSuggestionStore = defineStore('suggestion', {
  state,
  getters,
  actions,
})
