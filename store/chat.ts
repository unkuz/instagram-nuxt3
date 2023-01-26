import { defineStore } from 'pinia'

export enum STATUS_CHAT {
  NONE = 'NONE',
  SELECT = 'SELECT',
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    statusMobile: STATUS_CHAT.NONE,
    isShowDetailChat: false,
  }),
  getters: {},
  actions: {
    setStatus(status: STATUS_CHAT) {
      this.statusMobile = status
    },
    setIsShowDetailChat(isShowDetail: boolean) {
      this.isShowDetailChat = isShowDetail
    },
  },
})
