import { gsap } from 'gsap'
import { Ref } from 'vue'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'
import { useGlobalStore } from '~~/store/global'

export const useCarousel = (containerMediaRef: Ref<HTMLDivElement>) => {
  const globalStore = useGlobalStore()
  const current = ref(0)
  const dragStartX = ref(0)
  const dragEndX = ref(0)
  const distance = ref(0)

  const timer = ref(0)

  const transition = () => {
    gsap.to(containerMediaRef.value, {
      transform: `translateX(${-containerMediaRef.value.offsetWidth * current.value}px)`,
      duration: 0.2,
    })
  }

  useWindowResizeCallback(transition)
  watch(current, () => transition())

  const next = () => {
    if (current.value === containerMediaRef.value.childElementCount - 1) {
      return
    }
    current.value += 1
  }
  const prev = () => {
    if (current.value === 0) {
      return
    }
    current.value -= 1
  }

  const touchStart = (e: TouchEvent) => {
    dragStartX.value = e.touches[0].clientX
    console.log('START', e.touches[0].clientX)
  }
  const touchEnd = (e: TouchEvent) => {
    dragEndX.value = e.changedTouches[0].clientX
    console.log('END', e.changedTouches[0].clientX)
  }
  const abc = computed(() => dragEndX.value - dragStartX.value)
  const width = computed(() => globalStore.clientWidth)

  watch([dragStartX, dragEndX], ([a, b], [c, d]) => {
    console.log(a, b, c, d)
    if (a === b || c === d) {
      console.log('HJKDFKJHFJKFHKJF')
    }
    console.log(a, b, c, d)
    // if (Math.abs(abc.value) > width.value / 5) {
    //   if (abc.value > 0) {
    //     prev()
    //   } else {
    //     next()
    //   }
    //   console.log('PASS', abc.value)
    // }

    console.log('DIS', abc.value)
  })

  onMounted(() => {
    containerMediaRef.value.addEventListener('touchstart', touchStart)
    containerMediaRef.value.addEventListener('touchend', touchEnd)
  })

  return { next, prev, current }
}
