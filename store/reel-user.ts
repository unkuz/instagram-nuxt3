import { ITimeLine } from '@/models'
import { IStateStore } from '@/type'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { APP_API } from '@/apis'
import { stat } from 'fs'

type TState = IStateStore<ITimeLine[]>

export const useReelUserStore = defineStore('reel-user', {
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
    async fetch(user_name: string) {
      try {
        const { data, status } = await axios.get(APP_API.PROFILE.REEL.LIST, {
          params: {
            user_name,
          },
        })

        if (status === 200 && _isArray(data)) {
          this.data = data
        }
      } catch (e) {}
    },
  },
})
