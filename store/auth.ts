import { defineStore } from 'pinia'

interface IAuthState<T> {
  isLogin: boolean
  userName: T
  avatar: T
  coverImg: T
}

const state = (): IAuthState<string> => ({
  isLogin: true,
  userName: 'cuzknothz',
  avatar: '/image/91480011.jpg',
  coverImg: '/image/efc566f3-c275-44b3-a1a9-4eb8a361f626.jpg',
})

const getters = {}
const actions = {}

export const useAuthStore = defineStore('auth', {
  state,
  getters,
  actions,
})
