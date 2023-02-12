import { defineStore } from 'pinia'
import { IStory } from '@/models'
import { stories } from '~~/mocks'

interface IState {
  data: IStory[]
  hasErr: boolean
  errors: Record<string, string>
}

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    data: [...stories] as IStory[],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: IStory[] | null) {
      if (!_isNil(data)) {
        this.data = data
      }
    },
  },
})
