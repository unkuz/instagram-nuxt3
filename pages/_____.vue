<script lang="ts" setup>
import HeroPagelet from '~~/components/HeroPagelet/index.vue'
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'
import Stories from '~~/components/Stories/index.vue'

definePageMeta({
  layout: 'main',
})
const rightRef = ref<HTMLElement>(null)

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
        <div v-for="i in Array.from(Array(5).keys())" :key="i">
          <Post />
        </div>
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
