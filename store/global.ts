import { defineStore } from 'pinia'
import { MOBILE_BREAK_POINT } from '@@/constants'
import { SECTION } from '@@/constants'

interface GlobalState {
  section: SECTION
  prevSection: SECTION
  clientWidth: number
  clientHeight: number
  transition: boolean
}

const state = (): GlobalState => ({
  section: SECTION.HOME,
  prevSection: SECTION.NONE,
  clientWidth: 0,
  clientHeight: 0,
  transition: false,
})
const getters = {
  getSection: (state: GlobalState) => state.section,
  getClientWidth: (state: GlobalState) => state.clientWidth,
  getClientHeight: (state: GlobalState) => state.clientHeight,
  getIsMobile: (state: GlobalState) => state.clientWidth < MOBILE_BREAK_POINT,
  getIsTransition: (state: GlobalState) => state.transition,
  getIsMobileAndSelectNewPost: (state: GlobalState) =>
    state.clientWidth < MOBILE_BREAK_POINT && state.section === SECTION.NEW_POST,
}
const actions = {
  setSection(section: SECTION) {
    this.prevSection = this.section
    this.section = section
  },
  setClientSize(width: number, height: number) {
    this.clientWidth = width
    this.clientHeight = height
  },
  setTransition(transition: boolean) {
    this.transition = transition
  },
}

export const useGlobalStore = defineStore('globalStore', {
  state,
  getters,
  actions,
})
