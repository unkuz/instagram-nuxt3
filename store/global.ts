import { defineStore } from 'pinia'
import _ from 'lodash'
import { SECTION } from '~~/constants/section'

const state = () => ({
  section: SECTION.HOME,
  clientWidth: '',
  clientHeight: '',
  transition: false,
})
const getters = {
  getSection: (state) => state.section,
  getClientWidth: (state) => state.clientWidth,
  getClientHeight: (state) => state.clientHeight,
  getIsMobile: (state) => state.clientWidth < 768,
}
const actions = {
  setSection(section) {
    this.section = section
  },
  setClientSize(width, height) {
    this.clientWidth = width
    this.clientHeight = height
  },
  setTransition(transition) {
    this.transition = transition
  },
}

export const useGlobalStore = defineStore('globalStore', {
  state,
  getters,
  actions,
})
