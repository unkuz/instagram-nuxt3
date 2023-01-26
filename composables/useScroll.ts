import { useGlobalStore } from '@@/store'
import { ScrollTypeEnum } from '@@/type'

export const useScroll = () => {
    const globalStore = useGlobalStore()
    let oldScrollY = $ref(0)

    const controlDirection = () => {
        if (window.scrollY > oldScrollY) {
            globalStore.setScroll(ScrollTypeEnum.DOWN)
        } else {
            globalStore.setScroll(ScrollTypeEnum.UP)
        }
        oldScrollY = window.scrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', controlDirection)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', controlDirection)
    })
}
