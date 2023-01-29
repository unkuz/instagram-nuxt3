<script setup lang="ts">
interface IProps {
  currentTime: number
  duration: number
}

const props = defineProps<IProps>()

const emit = defineEmits(['setCurentTime'])

const progressBarRef = $ref<HTMLDivElement>()

const percentProgress = $computed(() => {
  return (props.currentTime * 100) / props.duration
})

const scrub = (e: MouseEvent) => {
  const scrubTime = e.offsetX / progressBarRef!.parentElement!.offsetWidth
  emit('setCurentTime', scrubTime)
}

watch(
  () => props.currentTime,
  () => {
    Object.assign(progressBarRef!.style, {
      width: `${percentProgress}%`,
    })
  }
)

const scub = () => {}
</script>
<template>
  <div>
    <div
      @click="scrub"
      :class="['absolute bottom-0 right-0  h-[4px] w-full cursor-pointer  bg-transparent hover:bg-c16 [&>div]:bg-c15']"
    >
      <div ref="progressBarRef" class="h-full w-0" />
    </div>
  </div>
</template>
