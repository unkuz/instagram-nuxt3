<script lang="ts" setup>
import { useStoriesStore } from '@/store'
import { useKeenSlider } from 'keen-slider/vue.es'
import Story from './Story.vue'

const storiesStore = useStoriesStore()
const stories = $computed(() => storiesStore.data)

const [container] = useKeenSlider({
  breakpoints: {
    '(min-width: 768px)': {
      slides: {
        perView: 7,
      },
    },
    '(min-width: 600px) and (max-width: 767px)': {
      slides: {
        perView: 6.5,
      },
    },
    '(min-width: 490px) and (max-width: 599px)': {
      slides: {
        perView: 6,
      },
    },
    '(min-width: 433px) and (max-width: 489px)': {
      slides: {
        perView: 5.5,
      },
    },
    '(min-width: 385px) and (max-width: 432px)': {
      slides: {
        perView: 5,
      },
    },
    '(min-width: 310px) and (max-width: 384px)': {
      slides: {
        perView: 4,
      },
    },
    '(min-width: 270px) and (max-width: 309px)': {
      slides: {
        perView: 3.5,
      },
    },
    '(min-width: 0px) and (max-width: 269px)': {
      slides: {
        perView: 3,
      },
    },
  },
  slides: {
    spacing: 0,
  },
  dragSpeed: 1.2,
  renderMode: 'precision',
})
</script>

<template>
  <div
    v-if="stories.length"
    v-cloak
    class="relative flex h-[119px] w-full items-center overflow-hidden bg-transparent p-0 dark:bg-c19 dark:bg-transparent md:mb-[10px]"
  >
    <div ref="container" class="keen-slider h-full pt-[20px]">
      <div v-for="i in stories" :key="i.id" class="keen-slider__slide">
        <Story v-bind="i" />
      </div>
    </div>
  </div>
</template>
