<script lang="ts" setup>
import { gsap } from 'gsap'

const customScrollBarRef = ref<HTMLDivElement>()

const startY = ref(0)
const endY = ref(0)
const isReady = ref(false)
const initY = ref(0)

const position = () => {
  initY.value = (window.scrollY / document.body.scrollHeight) * window.innerHeight
  gsap.to(customScrollBarRef.value, {
    height: `${(window.innerHeight * window.innerHeight) / document.body.clientHeight}`,
    top: `${(window.scrollY / document.body.scrollHeight) * window.innerHeight}`,
    duration: 0.5,
  })
}

watch([isReady, startY, endY], () => {
  if (isReady.value) {
    const scrollToY = ((endY.value - startY.value) / innerHeight) * document.body.scrollHeight
    window.scrollTo(0, scrollToY)
  }
})

const mouseMove = (e: MouseEvent) => {
  endY.value = e.clientY
}
const mouseUp = (e: MouseEvent) => {
  isReady.value = false
}

onMounted(() => {
  position()
  window.addEventListener('scroll', position)
  window.addEventListener('resize', position)
  window.addEventListener('mousemove', mouseMove)
  window.addEventListener('mouseup', mouseUp)
})

const mouseDown = (e: MouseEvent) => {
  isReady.value = true
  startY.value = e.clientY
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', position)
  window.removeEventListener('resize', position)
  window.removeEventListener('mousemove', mouseMove)
  window.removeEventListener('mouseup', mouseUp)
})
</script>

<template>
  <div>
    <div
      ref="customScrollBarRef"
      draggable
      class="fixed right-0 z-50 h-[200px] w-[6px] bg-[#00b3ff] hover:bg-[#ff0088] active:bg-[#ff0088]"
      @mousedown="mouseDown"
    />
  </div>
</template>
