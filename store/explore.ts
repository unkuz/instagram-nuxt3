import { defineStore } from 'pinia'
import { explore } from '@/mocks'

export const useExploreStore = defineStore('explore', {
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    save(val){
        if(_isNil(val)){
            return 
        }
        this.data = val
    }
  },
})
