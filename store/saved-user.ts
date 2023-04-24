import { ITimeLine } from '@/models'
import { IStateStore } from '@/type'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { APP_API } from '@/apis'
import { stat } from 'fs'

type TState = IStateStore<ITimeLine[]>

export const useSavedUserStore = defineStore('saved-user', {
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
    async fetch() {
      try {
        const { data, status } = await axios.get(APP_API.SAVED.LIST)

        if (status === 200 && _isArray(data)) {
          this.data = data
        }
      } catch (e) {}
    },
  },
})
