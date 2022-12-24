<script lang="ts" setup>
import { IStory } from '@@/models'
import { useKeenSlider } from 'keen-slider/vue.es'
import Story from './Story.vue'
import { useGlobalStore } from '@@/store'

interface IProps {
  stories: Array<IStory>
}

defineProps<IProps>()

const globalStore = useGlobalStore()

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

const isMobile = computed(() => globalStore.getIsMobile)
</script>

<template>
  <div
    :class="[
      ' h-[119px] w-full bg-transparent p-0  shadow-none shadow-c4 dark:bg-transparent md:mb-[24px] md:bg-c4 md:p-[1px] md:shadow-sm',
      {
        'clip-path': !isMobile,
      },
    ]"
  >
    <div v-cloak class="clip-path relative flex h-full w-full items-center bg-white dark:bg-c19">
      <div ref="container" class="keen-slider h-full pt-[20px]">
        <div class="keen-slider__slide" v-for="i in stories" :key="i.id">
          <Story v-bind="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-path {
  clip-path: polygon(2% 0, 100% 0, 100% 90%, 98% 100%, 0 100%, 0 10%);
}
</style>
