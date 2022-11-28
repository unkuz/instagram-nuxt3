import { defineStore } from 'pinia'
import { MOBILE_BREAK_POINT } from '@@/constants'
import { SECTION } from '@@/constants'
import { ScrollTypeEnum } from '~~/type'

interface IState {
    section: SECTION
    prevSection: SECTION
    clientWidth: number
    clientHeight: number
    transition: boolean,
    scroll: ScrollTypeEnum
}



export const useGlobalStore = defineStore('globalStore', {
    state: (): IState => ({
        section: SECTION.HOME,
        prevSection: SECTION.NONE,
        clientWidth: 0,
        clientHeight: 0,
        transition: false,
        scroll: ScrollTypeEnum.NONE
    }),
    getters: {
        getIsMobile: (state) => state.clientWidth < MOBILE_BREAK_POINT,
        getIsMobileAndSelectNewPost: (state) =>
            state.clientWidth < MOBILE_BREAK_POINT && state.section === SECTION.NEW_POST,
        getIsShowHeader:(state)=>{
            return state.scroll === ScrollTypeEnum.UP 
        }
    },
    actions: {
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
        setScroll(value:ScrollTypeEnum){
            this.scroll = value
        }
    },
})
