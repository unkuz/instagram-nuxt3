import { defineStore } from 'pinia'
import { explore } from '@@/mocks'

export const useExploreStore = defineStore('EXPLORE', {
  state:()=>({
    list: explore,
  }),
  getters:{},
  actions:{},
})
