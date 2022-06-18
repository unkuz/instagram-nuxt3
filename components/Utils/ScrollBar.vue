<script lang="ts" setup>
const customScrollBarRef = ref(null)
const dragYStart = ref(0)
const dragYEnd = ref(0)

const position = () => {
  Object.assign(customScrollBarRef.value.style, {
    height: `${(window.innerHeight * window.innerHeight) / document.body.scrollHeight}px`,
    top: `${(window.scrollY / document.body.scrollHeight) * window.innerHeight}px`,
  })
}

watch([dragYStart, dragYEnd], () => {
  const y = ((dragYEnd.value - dragYStart.value) / window.innerHeight) * document.body.scrollHeight
  window.scrollTo(0, y)
  console.log()
})

onMounted(() => {
  position()
  window.addEventListener('scroll', position)
  window.addEventListener('resize', position)
})

onUnmounted(() => {
  window.removeEventListener('scroll', position)
  window.removeEventListener('resize', position)
})

const dragStart = (e) => {
  e.preventDefault()
  console.log('START', e.screenX)
  console.log('START Y', e.screenY)
  dragYStart.value = e.screenY
}
const dragEnd = (e) => {
  e.preventDefault()
  console.log('END', e.screenX)
  console.log('END Y', e.screenY)
  dragYEnd.value = e.screenY
}
</script>

<template>
  <div>
    <div
      @dragstart="dragStart"
      @dragend="dragEnd"
      ref="customScrollBarRef"
      class="fixed right-0 z-50 h-[200px] w-[6px] bg-[#00b3ff]"
    ></div>
  </div>
</template>
