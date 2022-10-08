import { defineStore } from 'pinia'
import { TSuggestion } from '~~/models'

export interface IState {
  data: TSuggestion[]
  hasErr: boolean
  errors: Record<string, string>
}

const state = () => ({
  data: [],
  hasErr: false,
  errors: {},
})

const getters = {}

const actions = {
  save(data: TSuggestion[]) {
    this.data = data
  },
}

export const useSuggestionStore = defineStore('suggestion', {
  state,
  getters,
  actions,
})
