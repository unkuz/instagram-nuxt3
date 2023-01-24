import { defineStore } from 'pinia'
import { ITimeLine } from '@@/models'
import { IStateStore } from '@@/type'
import { timeLine } from '@/mocks/reelTimeLine'

type TState = IStateStore<ITimeLine[]>

export const useTimeLineStore = defineStore('timeline', {
    state: (): TState => ({
        data: [...timeLine],
        hasErr: false,
        errors: {},
    }),
    getters: {},
    actions: {
        save(data: ITimeLine[]) {
            this.data = data
        },
        setToggleLike(id: string) {
            this.data.forEach((i: ITimeLine) => {
                if (i.id === id) {
                    setTimeout(() => {
                        i.has_liked = !i.has_liked
                        i.like_count = i.has_liked
                            ? i.like_count + 1
                            : i.like_count - 1
                    }, 500)
                }
            })
        },
        setToggleSave(id: string) {
            this.data.forEach((i: ITimeLine) => {
                if (i.id === id) {
                    setTimeout(() => {
                        i.is_saved = !i.is_saved
                    }, 500)
                }
            })
        },
        comment(
            id,
            { text, userName, userImg, id: commentId, commentReplyId }
        ) {
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
                const idxCmRep = this.data[idx].comments.findIndex(
                    (i) => i.id === commentReplyId
                )
                this.data[idx].comments[idxCmRep].reply.push(data)
            } else {
                this.data[idx].comments.unshift(data)
            }
        },
    },
})
