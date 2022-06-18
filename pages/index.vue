<script lang="ts" setup>
import HeroPagelet from '~~/components/HeroPagelet/index.vue'
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'
// import NewPost from '~~/components/Huge/NewPost/index.vue
import { useGlobalStore } from '~~/store/global'
import { SECTION } from '~~/constants/section'
import BackDrop from '~~/components/Utils/BackDrop.vue'
const mainRef = ref(null)
const leftRef = ref(null)
definePageMeta({
  layout: 'main',
})

// const rightRef = ref(null)

// onMounted(() => {
//   rightRef.value.style.left = `${leftRef.value.offsetLeft + 642}px`
//   console.log('KAKA', leftRef.value.offsetLeft)
// })

// useWindowResizeCallback(() => {
//   rightRef.value.style.left = `${leftRef.value.offsetLeft + 642}px`
// })
</script>

<template>
  <div>
    <div ref="mainRef" class="flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block" ref="leftRef">
        <HeroPagelet />
        <div v-for="i in Array.from(Array(5).keys())" :key="i">
          <Post />
        </div>
      </div>
      <!-- <div
        class="fixed top-[84px] left-[20000px] hidden h-[473px] w-[293px] bg-white text-sm lg:block"
        ref="rightRef"
      >
        <Suggestions />
      </div> -->
    </div>
  </div>
</template>
