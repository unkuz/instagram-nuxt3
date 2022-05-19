import { defineStore } from 'pinia'
import { MOBILE_BREAK_POINT } from '~~/constants/responsive'
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
  getIsMobile: (state) => state.clientWidth < MOBILE_BREAK_POINT,
  getIsTransition: (state) => state.transition,
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
