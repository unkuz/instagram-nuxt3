import { defineStore } from 'pinia'
import { ITimeLine } from '@@/models'

interface IState {
    data: ITimeLine[] | null
    hasErr: boolean
    errors: {}
}

const state = (): IState => ({
    data: [],
    hasErr: false,
    errors: {},
})

const getters = {}

const actions = {
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
}

export const useTimeLineStore = defineStore('timeline', {
    state,
    getters,
    actions,
})
