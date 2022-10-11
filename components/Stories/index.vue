<script lang="ts">
import { IStory } from '@@/models'
import { useKeenSlider } from 'keen-slider/vue.es'
import Story from './Story.vue'
import 'keen-slider/keen-slider.min.css'

export default {
  setup() {
    const [container] = useKeenSlider({
      slides: {
        perView: 7,
        spacing: 0,
      },
    })
    return { container }
  },
  props: {
    stories: Array<IStory>,
  },
  components: {
    Story,
  },
}
</script>

<template>
  <div
    class="relative inline-flex h-[119px] w-full items-center overflow-hidden border-0 border-gray-200 shadow-gray-200 sm:mb-[24px] sm:border-[1px] sm:shadow-sm"
  >
    <div
      ref="container"
      class="keen-slider h-[85px] w-full transition-all duration-500 ease-in-out"
    >
      <div class="keen-slider__slide" v-for="i in stories">
        <Story v-bind="i" :key="i.id" />
      </div>
    </div>
    <div class="absolute top-1/2 right-2 -translate-y-1/2">
      <ArrowIcon_ />
    </div>
    <div class="absolute top-1/2 left-2 -translate-y-1/2">
      <ArrowIcon_ class="rotate-180" />
    </div>
  </div>
</template>
