import { IAuthData } from '@/models'
import { IAccountLogin, IStateStore } from '@/type'
import { defineStore } from 'pinia'
import { APP_API } from '~~/apis'
import { axios } from '~~/services/axios'

type TState = IStateStore<IAuthData>

export const useAuthStore = defineStore('auth', {
  state: (): any => ({
    data: {
      user: {},
      token: {},
    },
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    async login(account: IAccountLogin) {
      try {
        const { data } = await axios.post(APP_API.AUTH.LOGIN, {
          ...account,
        })
        this.data.user = data.user
        this.data.token = data.token
      } catch (e: any) {
        this.data.user = {}
        this.data.token = {}
        this.hasErr = true
        this.errors = e.response.data
      }
    },
  },
  persist: true,
})
