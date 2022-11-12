import { defineStore } from 'pinia'
import { IStory } from '@@/models'

interface IState {
    data: IStory[]
    hasErr: boolean
    errors: Record<string, string>
}

const state = (): IState => ({
    data: [],
    hasErr: false,
    errors: {},
})

const getters = {}
const actions = {
    save(_data: IStory[]) {
        this.data = _data
    },
}

export const useStoriesStore = defineStore('stories', {
    state,
    getters,
    actions,
})
