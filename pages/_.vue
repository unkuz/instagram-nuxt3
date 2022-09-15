<script lang="ts" setup>
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import Stories from '~~/components/Stories/index.vue'
import { useTimeLineStore } from '~~/store/timeline'

definePageMeta({
  layout: 'main',
})
const rightRef = ref<HTMLElement>(null)
const timeLineStore = useTimeLineStore()
const timeline = computed(() => timeLineStore.timeline)

const positionRight = () => {
  rightRef.value.style.top = `${window.scrollY}px`
}

onMounted(() => {
  positionRight()
  addEventListener('scroll', positionRight)
})

onUnmounted(() => {
  removeEventListener('scroll', positionRight)
})
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div
        class="absolute top-0 right-0 hidden h-[473px] w-[293px] bg-white text-sm lg:block"
        ref="rightRef"
      >
        <Suggestions />
      </div>
    </div>
    <NuxtChild />
  </div>
</template>
