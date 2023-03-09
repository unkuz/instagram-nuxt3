import { IAuthData } from '@/models'
import { IAccountLogin, IStateStore } from '@/type'
import { defineStore } from 'pinia'
import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { ToastTypeEnum, useToastStore } from '@/store'

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
      const toastStore = useToastStore()

      const { user_name, password } = account
      try {
        const { data } = await axios.post(APP_API.AUTH.LOGIN, {
          user_name,
          password,
        })
        this.data.user = data.user
        this.data.token = data.token
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Login successfully',
        })

        navigateTo('/')
      } catch (e: any) {
        this.data.user = {}
        this.data.token = {}
        this.hasErr = true
        this.errors = e.response.data
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: this.errors?.detail,
        })
      }
    },
    logout() {
      this.data.user = {}
      this.data.token = {}
      this.hasErr = false
      this.errors = {}
    },
    async createAccount(account: IAccountLogin) {
      const toastStore = useToastStore()
      try {
        const { data } = await axios.post(APP_API.AUTH.CREATE, { ...account })
        console.log('DAAAAA', data)
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Nice. Create account successfully',
        })
      } catch (e: any) {
        this.errors = e.response.data
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: this.errors?.detail,
        })
      }
    },
  },
  persist: true,
})
