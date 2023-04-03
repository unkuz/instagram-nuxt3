<script setup lang="ts">
import { useStoryDetailStore } from '@/store/story/detail'
import { useKeenSlider } from 'keen-slider/vue.es'
import { BASE_URL_API } from '@/apis'

const route = useRoute()

const storyDetailStore = useStoryDetailStore()

const id = $computed(() => route.params.id)

const story = $computed(() => storyDetailStore.data)

const media = computed(() =>
  _concat(
    storyDetailStore.data?.carousel_media?.videos,
    storyDetailStore?.data?.carousel_media?.images
  )
)

const [sliderRef, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  renderMode: 'precision',
  dragSpeed: 0.1,
})

watch(
  media,
  (val) => {
    slider.value?.update()
  },
  { flush: 'post', deep: true }
)
</script>
<template>
  <div class="relative h-[80vh] w-[500px] max-w-[50vw] bg-c2">
    <div ref="sliderRef" class="keen-slider h-full w-full">
      <div
        class="keen-slider__slide flex items-center justify-center"
        v-for="i in storyDetailStore?.data?.carousel_media?.videos"
      >
        <video controls :src="BASE_URL_API + i.src" />
      </div>
      <div
        class="keen-slider__slide flex items-center justify-center"
        v-for="i in storyDetailStore?.data?.carousel_media?.images"
      >
        <img :src="BASE_URL_API + i.src" class="h-full w-full object-contain" />
      </div>
    </div>
    <div class="absolute right-1/2 top-[10px] flex h-[5px] w-[90%] translate-x-1/2 gap-[10px]">
      <div v-for="i in media" class="h-full flex-1 rounded-[2.5px] bg-blue-400"></div>
    </div>
  </div>
</template>
