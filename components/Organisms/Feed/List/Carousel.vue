<script lang="ts" setup>
import ArrowIcon_ from '@/assets/svg/arrow_icon.svg'
import { useCarousel, useDoubleClick } from '@/composables'
import { stopOtherVideoPlaying } from '@/helpers'
import { gsap } from 'gsap'
import Image from './Image.vue'
import Like from './Like.vue'
import Save from './Save.vue'
import Unlike from './Unlike.vue'
import Video from './Video.vue'
import { useKeenSlider } from 'keen-slider/vue.es'

interface IProps {
  images: any
  videos: any
  hasLiked: boolean
  id: number
  hasSaved: boolean
  currentParent: number
}

const callback = (e: any) => {
  emit('current-index-carousel', e.track.details.abs)
}

const [sliderRef, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  renderMode: 'precision',
  slideChanged: callback,
  dragSpeed: 0.1,
})

const props = defineProps<IProps>()
let initShowLikeSaved = $ref(false)
const emit = defineEmits(['current-index-carousel'])

const isShowPre = $computed(() => props.currentParent !== 0)
const isShowNext = $computed(
  () => props.currentParent !== props.images.concat(props.videos).length - 1
)
const totalMedia = $computed<number>(() => props.images.concat(props.videos).length)

watch(
  () => props.currentParent,
  (val) => {
    stopOtherVideoPlaying()
  }
)

// useDoubleClick(
//   sliderRef,
//   () => {},
//   () => {}
// )

watch([() => props.hasSaved, () => props.hasLiked], () => {
  initShowLikeSaved = true
})
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div ref="sliderRef" class="keen-slider inline-flex min-w-full select-none">
      <Image v-for="i in images" :key="i.id" :src="i.src" :id-post="id" />
      <Video v-for="(video, idx) in videos" :key="idx" :video="video" :id-post="id" />
    </div>
    <div
      v-if="isShowPre"
      class="absolute left-0 top-[50%] hidden h-[80px] w-[80px] -translate-y-1/2 items-center justify-center rounded-[50%] md:flex"
      @click="slider?.prev()"
    >
      <ArrowIcon_ class="rotate-180 opacity-80" />
    </div>

    <div
      v-if="isShowNext"
      class="absolute right-0 top-[50%] hidden h-[80px] w-[80px] -translate-y-1/2 items-center justify-center rounded-[50%] md:flex"
      @click="slider?.next()"
    >
      <ArrowIcon_ class="opacity-80" />
    </div>
    <div
      class="absolute right-[20px] top-[20px] flex min-w-[40px] select-none justify-center rounded-full bg-c2/30 px-[8px] py-[3px] text-[0.75rem] font-[600] text-c1 backdrop-blur-[1px] dark:bg-c1/30 dark:text-c2"
    >
      {{ `${currentParent + 1}/${totalMedia}` }}
    </div>
    <div v-show="initShowLikeSaved">
      <Unlike v-if="hasLiked" />
      <Like v-else />
      <Save v-if="hasSaved" class-name="[&>path]:fill-c11 [&>path]:stroke-c11" />
      <Save v-else class-name="[&>path]:fill-c2 [&>path]:stroke-c2" />
    </div>
  </div>
</template>
