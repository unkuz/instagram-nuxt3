<script lang="ts" setup>
import HeroPagelet from '~~/components/HeroPagelet/index.vue'
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'

const mainRef = ref(null)
const leftSectionRef = ref(null)
const rightSectionRef = ref(null)

onMounted(() => {
  rightSectionRef.value.style.left = `${leftSectionRef.value.offsetLeft + 935 - 293}px`
})
useWindowResizeCallback(() => {
  rightSectionRef.value.style.left = `${leftSectionRef.value.offsetLeft + 935 - 293}px`
})
</script>

<template>
  <div>
    <Head>
      <Title>Instagram</Title>
    </Head>
    <div ref="mainRef" class="flex w-full justify-center lg:block">
      <div
        class="inline-flex w-full flex-col items-center md:w-[614px] lg:block"
        ref="leftSectionRef"
      >
        <HeroPagelet />
        <div v-for="i in Array.from(Array(5).keys())" :key="i">
          <Post />
        </div>
      </div>
      <div
        class="fixed top-[84px] left-[20000px] hidden h-[473px] w-[293px] bg-white text-sm lg:block"
        ref="rightSectionRef"
      >
        <Suggestions />
      </div>
    </div>
  </div>
</template>
