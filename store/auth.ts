import { defineStore } from 'pinia'

const state = () => ({
  isLogin: true,
  userName: 'cuzknothz',
  avatar: '/image/avatar.jpg',
})

const getters = {}
const actions = {}

export const useAuthStore = defineStore('auth', {
  state,
  getters,
  actions,
})
