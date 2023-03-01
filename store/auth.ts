import { defineStore } from 'pinia'
import { IStateStore } from '@/type'
import { IAuthData } from '@/models'
import { axios } from '~~/services/axios'
import { APP_API } from '~~/apis'

type TState = IStateStore<IAuthData>

export const useAuthStore = defineStore('auth', {
  state: (): TState => ({
    data: {
      user:{},
      token:{},
      isLogin: true,
      userName: 'cuzknothz',
      avatar: '/image/91480011.jpg',
      coverImg: '/image/efc566f3-c275-44b3-a1a9-4eb8a361f626.jpg',
      role: '',
      access:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNTYwNjcyLCJpYXQiOjE2Nzc2NDA2NzIsImp0aSI6IjMwMjlhZmIzZWU0YTRiYjg4Y2JhMmUzNjExNmI0Y2IxIiwidXNlcl9pZCI6MjF9.by2-xsX38U3D9Yor2NUGhd9i4i941gau9ctt1DE5mbs',
    },
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    async login(account) {
      try{
        const { data } = await axios.post(APP_API.AUTH.LOGIN, {
          ...account,
        })
        this.data.user = data.user
        this.data.token = data.token
      }
      catch(e){
        this.data.user = {}
        this.data.token = {}
        this.hasErr = true
        this.errors = e.response.data
      }
     
    },
  },
  persist: true,
})
