import { ITimeLine } from '@/models'
import { IStateStore } from '@/type'
import { defineStore } from 'pinia'

type TState = IStateStore<ITimeLine[]>

export const useFeedUserStore = defineStore('feed-user', {
  state: (): any => ({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(val: any) {
      this.data = val
    },
  },
})
