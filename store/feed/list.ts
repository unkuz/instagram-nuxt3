import { defineStore } from 'pinia'
import { ITimeLine } from '@/models'
import { IStateStore } from '@/type'
import { timeLine } from '@/mocks'
import { useSlashStore } from '@/store'

type TState = IStateStore<ITimeLine[]>

export const useFeedStore = defineStore('feed', {
  state: (): any => ({
    data: [],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: ITimeLine[] | null) {
      if (data) {
        this.data = data
      }
    },
    setToggleLike(id : number) {
      const slashStore = useSlashStore()

      this.data.forEach((i: ITimeLine) => {
        if (i.id === id) {
          if (i.has_liked) {
            i.has_liked = false
            slashStore.setHideSlash()
          } else {
            i.has_liked = true
            slashStore.setShowAnimation('love')
          }

          i.like_count = i.has_liked ? i.like_count + 1 : i.like_count - 1
        }
      })
    },
    setToggleSave(id : number) {
      this.data.forEach((i: ITimeLine) => {
        if (i.id === id) {
          i.is_saved = !i.is_saved
        }
      })
    },
    comment(id, { text, userName, userImg, id: commentId, commentReplyId }) {
      const idx = this.data.findIndex((i) => i.id === id)

      const data = {
        text,
        created_at: new Date().getTime(),
        user: {
          pk: '',
          username: userName,
          full_name: '',
          is_private: '',
          profile_pic_url: userImg,
        },
        comment_like_count: 0,
        reply: [],
        id: commentId,
      }

      if (commentReplyId) {
        const idxCmRep = this.data[idx].comments.findIndex((i) => i.id === commentReplyId)
        this.data[idx].comments[idxCmRep].reply.push(data)
      } else {
        this.data[idx].comments.unshift(data)
      }
    },
  },
})
