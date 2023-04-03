import { notification } from '@/mocks/notification'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    data: [...notification],
  }),
  getters: {},
  actions: {},
})
