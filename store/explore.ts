import { defineStore } from 'pinia'
import { explore } from '@@/mocks'

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
