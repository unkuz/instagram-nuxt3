import { defineStore } from 'pinia'
import { TSuggestion } from '@@/models'

export interface IState {
  data: TSuggestion[]
  hasErr: boolean
  errors: Record<string, string>
}


export const useSuggestionStore = defineStore('suggestion', {
  state:():IState=>({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters:{},
  actions:{save(data: TSuggestion[]) {
    this.data = data
  },},
})
