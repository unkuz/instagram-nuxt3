import { defineStore } from 'pinia'
import { TSuggestion } from '@/models'
import { MAX_SUGGESTION_PEOPLE_FOLLOW } from '@/configs'

export interface IState {
  data: TSuggestion[]
  hasErr: boolean
  errors: Record<string, string>
}

export const useSuggestionStore = defineStore('suggestion', {
  state: (): IState => ({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: TSuggestion[] | null) {
      if (data) {
        this.data = data.slice(0, MAX_SUGGESTION_PEOPLE_FOLLOW)
      }
    },
  },
})
