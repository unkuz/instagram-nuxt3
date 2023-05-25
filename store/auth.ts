import { APP_API, BASE_URL_API } from '@/apis'
import { IAuthData } from '@/models'
import { axios } from '@/services/axios'
import {
  ToastTypeEnum,
  useToastStore,
  useUserAuthFollowerStore,
  useUserAuthFollowingStore,
} from '@/store'
import { IAccountLogin, IStateStore } from '@/type'
import { defineStore } from 'pinia'

type TState = IStateStore<IAuthData>

export const useAuthStore = defineStore('auth', {
  state: (): any => ({
    data: {
      user: {
        followers: [],
        following: [],
      },
      token: {},
    },
    hasErr: false,
    errors: {},
    pending: false,
  }),
  getters: {},
  actions: {
    async login(account: IAccountLogin) {
      const toastStore = useToastStore()
      const userAuthFollowerStore = useUserAuthFollowerStore()
      const userAuthFollowingStore = useUserAuthFollowingStore()

      const { user_name, password } = account
      this.pending = true
      try {
        const { data, status } = await axios.post(APP_API.AUTH.LOGIN, {
          user_name,
          password,
        })

        if (status === 200) {
          this.data.user = {
            ...data.user,
            profile_pic_url: `${BASE_URL_API}/${data.user.profile_pic_url}`,
            cover_pic_url: `${BASE_URL_API}/${data.user.cover_pic_url}`,
          }
          this.data.token = data.token
          userAuthFollowingStore.fetch()
          toastStore.pushTimmer({
            type: ToastTypeEnum.SUCCESS,
            content: 'Login successfully',
          })

          navigateTo('/')
        }
      } catch (e: any) {
        this.data.user = {}
        this.data.token = {}
        this.hasErr = true
        this.errors =
          e.response?.data?.detail ?? 'The server is down, please try again later 😅😅😅'
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: this.errors,
        })
      } finally {
        this.pending = false
      }
    },
    logout() {
      this.data.user = {}
      this.data.token = {}
      this.hasErr = false
      this.errors = {}
    },
    async create(account: IAccountLogin) {
      const toastStore = useToastStore()
      this.pending = true
      try {
        const { data } = await axios.post(APP_API.AUTH.CREATE, { ...account })
        toastStore.pushTimmer({
          type: ToastTypeEnum.SUCCESS,
          content: 'Nice. Create account successfully',
        })
      } catch (e: any) {
        this.errors =
          e.response?.data?.detail ?? 'The server is down, please try again later 😅😅😅'
        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: this.errors,
        })
      } finally {
        this.pending = false
      }
    },
    async getNewAccessToken(val: string) {
      try {
        const { data } = await axios.post(APP_API.AUTH.GET_NEW_TOKEN, { refresh: val })
        this.data.token.access = data
      } catch (e) {}
    },
  },
  persist: true,
})
