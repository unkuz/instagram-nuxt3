import { defineStore } from 'pinia'
import { notification } from '@/mocks/notification'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    data: [...notification],
  }),
  getters: {},
  actions: {},
})
