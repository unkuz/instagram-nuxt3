import { defineStore } from 'pinia'

export const useStoryStore = defineStore('story', {
    state: () => ({ isShowStory: false }),
    getters: {},
    actions: {
        setIsShowStory(value: boolean) {
            this.isShowStory = value
        },
    },
})
