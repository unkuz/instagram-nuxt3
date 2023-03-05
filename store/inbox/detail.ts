import { defineStore } from 'pinia'
import { inboxDetail } from '@/mocks'
import { useAuthStore } from '@/store'

export const useInboxDetailStore = defineStore('inboxDetail', {
  state: () => ({
    data: [...inboxDetail],
    // data: [] as typeof inboxDetail,
    detail: {
      replying: false,
    },
  }),
  getters: {
    dataAfterProcees: (state) => {
      if (!_isArray(state.data)) return []
      let _data = _cloneDeep(state.data.map((i) => ({ ...i, sequent: false, sequentNo: 1 })))

      for (let i = 0; i < state.data.length; i++) {
        if (_data?.[i]?.user?.username === _data?.[i + 1]?.user?.username) {
          _data[i].sequent = true
          _data[i + 1].sequent = true
        }
      }

      return _data
    },
  },
  actions: {
    save(data:any) {
      if (data) {
        this.data = data
      }
    },
    async reply(val: string | FileList | null) {
      if (_isString(val) && !val.trim()) {
        return
      }

      let type: string = 'text'
      let content: any

      if (typeof val === 'string') {
        type = 'text'
        content = val
      }

      if (typeof val === 'object') {
        type = 'image'

        const arrFile = [...Array.from(val)]
        const listBlobs = arrFile.map((i) => URL.createObjectURL(i))

        content = listBlobs.map((blob) => ({ id: Math.random(), src: blob }))
      }

      console.log('VAL', val, typeof val)
      const authStore = useAuthStore()
      const {
        data: { userName, avatar },
      } = authStore
      let _data = _cloneDeep(this.data)
      _data.push({
        user: {
          id: userName,
          username: userName,
          full_name: userName,
          profile_pic_url: avatar,
          friendship_status: {
            following: true,
            outgoing_request: false,
          },
        },
        message: {
          type,
          content,
        },
      })
      this.data = _data
    },
    setReplying(val: boolean) {
      this.detail.replying = val
    },
  },
})
