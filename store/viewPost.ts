import { defineStore } from 'pinia'


export const useViewPostStore = defineStore('viewPostStore', {
    state: () => ({
        isShow: false,
    }),
    getters: {

    },
    actions: {
        setIsShow(value: boolean) {
            this.isShow = value
        },
    },
})
