import { MOBILE_BREAK_POINT, SectionEnum } from '@/constants'
import { ScrollTypeEnum } from '@/type'
import { defineStore } from 'pinia'

interface IState {
  section: SectionEnum
  prevSection: SectionEnum
  clientWidth: number
  clientHeight: number
  transition: boolean
  scroll: ScrollTypeEnum
}

export const useGlobalStore = defineStore('global', {
  state: (): IState => ({
    section: SectionEnum.HOME,
    prevSection: SectionEnum.NONE,
    clientWidth: 0,
    clientHeight: 0,
    transition: false,
    scroll: ScrollTypeEnum.NONE,
  }),
  getters: {
    getIsMobile: (state) => state.clientWidth < MOBILE_BREAK_POINT,
    getIsShowHeader: (state) => {
      return state.scroll === ScrollTypeEnum.UP
    },
  },
  actions: {
    setSection(section: SectionEnum) {
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
    setScroll(value: ScrollTypeEnum) {
      this.scroll = value
    },
  },
})
