<script lang="ts" setup>
import { useStoriesStore } from '@/store'
import { useKeenSlider } from 'keen-slider/vue.es'
import User from './User.vue'

const storiesStore = useStoriesStore()
const stories = $computed(() => storiesStore.data)

const [container] = useKeenSlider({
  breakpoints: {
    '(min-width: 385px)': {
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
  <div ref="container" class="keen-slider h-[120px] pt-[20px]">
    <div v-for="i in stories" :key="i.id" class="keen-slider__slide">
      <User v-bind="i" />
    </div>
  </div>
</template>

