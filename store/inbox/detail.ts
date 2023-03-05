import { axios } from '@/services/axios'
import { defineStore } from 'pinia'
import { APP_API } from '~~/apis'

export const useInboxDetailStore = defineStore('inboxDetail', {
  state: () => ({
    data: {},
    detail: {
      replying: false,
    },
  }),
  getters: {
    dataAfterProcees: (state) => {
      if (!_isArray(state.data.messages)) return []
      let _data = _cloneDeep(
        state.data.messages.map((i) => ({ ...i, sequent: false, sequentNo: 1 }))
      )

      for (let i = 0; i < state.data.messages.length; i++) {
        if (_data?.[i]?.user?.user_name === _data?.[i + 1]?.user?.user_name) {
          _data[i].sequent = true
          _data[i + 1].sequent = true
        }
      }

      return _data
    },
  },
  actions: {
    save(data: any) {
      if (data) {
        this.data = data
      }
    },
    async reply(val: string | FileList | null, id: number) {
      console.log('VA', val)

      await axios.post(`${APP_API.INBOX.LIST}send/`, {
        inbox: id,
        message: val,
      })
    },
    setReplying(val: boolean) {
      this.detail.replying = val
    },
  },
})
