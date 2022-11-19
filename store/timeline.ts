import { defineStore } from 'pinia'
import { ITimeLine } from '@@/models'
import { IStateStore } from '@@/type';

type TState = IStateStore<ITimeLine[]>

export const useTimeLineStore = defineStore('timeline', {
    state: (): TState => ({
        data: [],
        hasErr: false,
        errors: {},
    }),
    getters: {

    },
    actions: {
        save(data: ITimeLine[]) {
            this.data = data
        },
        setToggleLike(id: string) {
            this.data.forEach((i: ITimeLine) => {
                if (i.id === id) {
                    setTimeout(() => {
                        i.has_liked = !i.has_liked
                        i.like_count = i.has_liked ? i.like_count + 1 : i.like_count - 1
                    }, 500)
                }
            })
        },
    },
})
