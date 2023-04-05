import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { ToastTypeEnum, useToastStore } from '../toast'

export const useInboxListUserStore = defineStore('listUser', {
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    save(data: any) {
      if (!_isNil(data)) {
        this.data = data
      }
    },
    async inbox({ recipient, content = '' }: any) {
      try {
        const { data } = await axios.post(APP_API.INBOX.LIST, {
          recipient,
          content,
        })

        const id = data?.id

        if (_isNumber(id)) {
          navigateTo(`/inbox/${id}`)
        }
      } catch (e) {
        const toastStore = useToastStore()

        toastStore.pushTimmer({
          type: ToastTypeEnum.ERROR,
          content: 'Something wrong! Try again later ',
        })
      }
    },
  },
})
