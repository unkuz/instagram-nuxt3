<script lang="ts" setup>
import { IStory } from '@@/models'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/vue.es'
import Story from './Story.vue'

interface IProps {
  stories: Array<IStory>
}

defineProps<IProps>()

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
})
</script>

<template>
  <div
    v-cloak
    class="relative flex h-[119px] w-full items-center border-0 border-gray-200 shadow-gray-200 md:mb-[24px] md:border-[1px] md:shadow-sm"
  >
    <div ref="container" class="keen-slider h-full pt-[20px]">
      <div class="keen-slider__slide" v-for="i in stories" :key="i.id">
        <Story v-bind="i" />
      </div>
    </div>
  </div>
</template>
