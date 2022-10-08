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

const positionRight = ref(() => {
  rightRef.value.style.top = `${window.scrollY}px`
})

onMounted(() => {
  positionRight.value()
  addEventListener('scroll', positionRight.value)
})

onUnmounted(() => {
  removeEventListener('scroll', positionRight.value)
})
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div class="absolute top-0 right-0 hidden w-[293px] bg-white text-sm lg:block" ref="rightRef">
        <Suggestions />
      </div>
    </div>
    <NuxtChild />
  </div>
</template>
