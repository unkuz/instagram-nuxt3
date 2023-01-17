import { defineStore } from 'pinia'
import { explore } from '@@/mocks'

export const useExploreStore = defineStore('explore', {
    state: () => ({
        list: explore,
    }),
    getters: {},
    actions: {},
})
