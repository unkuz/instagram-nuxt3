import { defineStore } from 'pinia'
import { explore } from '~~/mocks/explore'

const state = () => ({
  list: explore,
})

const getters = {}

const actions = {}

export const useExploreStore = defineStore('EXPLORE', {
  state,
  getters,
  actions,
})
