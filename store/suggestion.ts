import { APP_CONFIGS } from '@/configs'
import { TSuggestion } from '@/models'
import { defineStore } from 'pinia'

export interface IState {
  data: TSuggestion[]
  hasErr: boolean
  errors: Record<string, string>
}

export const useSuggestionStore = defineStore('suggestion', {
  state: (): any => ({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: any) {
      if (data) {
        this.data = data.slice(0, APP_CONFIGS.MAX_SUGGESTION_PEOPLE_FOLLOW)
      }
    },
  },
})
