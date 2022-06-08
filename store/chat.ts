import { defineStore } from 'pinia'

export enum STATUS_CHAT {
  NONE = 'NONE',
  SELECT = 'SELECT',
}
interface StatusChat {
  statusMobile: STATUS_CHAT
  isShowDetailChat: boolean
}

const state = (): StatusChat => ({
  statusMobile: STATUS_CHAT.NONE,
  isShowDetailChat: false,
})

const getters = {
  getStatus: (state: StatusChat) => state.statusMobile,
  getIsShowDetailChat: (state: StatusChat) => state.isShowDetailChat,
}
const actions = {
  setStatus(status: STATUS_CHAT) {
    this.statusMobile = status
  },
  setIsShowDetailChat(isShowDetail) {
    this.isShowDetailChat = isShowDetail
  },
}

export const useChatStore = defineStore('chatStore', {
  state,
  getters,
  actions,
})
