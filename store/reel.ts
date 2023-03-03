import { isNil } from 'lodash'
import { defineStore } from 'pinia'
import { mock_reel } from '~~/mocks'

export const useReelStore = defineStore('reel', {
  state: () => ({
    data: [...mock_reel],
  }),
  getters: {},
  actions: {
    save(val: any) {
      if (isNil(val)) {
        return
      }
      this.data = val
    },
  },
})
