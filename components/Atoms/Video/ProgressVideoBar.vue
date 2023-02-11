<script setup lang="ts">
interface IProps {
  currentTime: number
  duration: number
  buffered: [number, number][]
}

const props = defineProps<IProps>()

const emit = defineEmits(['setCurentTime'])

const progressBarRef = $ref<HTMLDivElement>()

const percentProgress = $computed(() => {
  return (props.currentTime * 100) / props.duration
})

const scrub = (e: MouseEvent) => {
  emit('setCurentTime', e.offsetX / progressBarRef!.parentElement!.offsetWidth)
}

watch(
  () => props.currentTime,
  () => {
    Object.assign(progressBarRef!.style, {
      width: `${percentProgress}%`,
    })
  }
)
</script>
<template>
  <div>
    <div
      v-for="(i, idx) in buffered"
      class="absolute bottom-0 h-[4px] bg-[#ffffff48]"
      :style="`left: ${(i[0] * 100) / duration}%; right: ${100 % -((i[1] * 100) / duration)}%`"
      :key="idx"
    ></div>
    <div
      @click="scrub"
      :class="[
        'absolute bottom-0 right-0  h-[4px] w-full cursor-pointer  bg-transparent hover:bg-c16 dark:hover:bg-c17/20  [&>div]:bg-c15 dark:[&>div]:bg-c17',
      ]"
    >
      <div ref="progressBarRef" class="h-full w-0" />
    </div>
  </div>
</template>
