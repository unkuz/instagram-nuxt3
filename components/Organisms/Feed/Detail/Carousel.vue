<script lang="ts" setup>
import ArrowIcon_ from '@/assets/svg/arrow_icon.svg'
import { useCarousel } from '@/composables'
import { stopOtherVideoPlaying } from '@/helpers'
import { gsap } from 'gsap'
import Image from './../List/Image.vue'
import Like from './../List/Like.vue'
import Save from './../List/Save.vue'
import Unlike from './../List/Unlike.vue'
import Video from './../List/Video.vue'
import { useKeenSlider } from 'keen-slider/vue.es'

interface IProps {
  images: any
  videos: any
  hasLiked: boolean
  id: number
  hasSaved: boolean
  currentParent: number
}

const props = defineProps<IProps>()
let initShowLikeSaved = $ref(false)
const emit = defineEmits(['current-index-carousel'])

const [containerMediaRef, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  dragSpeed: 2,
  renderMode: 'precision',
  vertical: false,
})

const { next, prev, current } = useCarousel(containerMediaRef)

const isShowPre = $computed(() => current.value !== 0)
const isShowNext = $computed(() => current.value !== props.images.concat(props.videos).length - 1)
const totalMedia = $computed<number>(() => props.images.concat(props.videos).length)

watch(
  () => props.currentParent,
  (val) => {
    current.value = val
  }
)

watch(current, (idx) => {
  emit('current-index-carousel', idx)
  stopOtherVideoPlaying()
  const containerMediaEl = unref(containerMediaRef)
  if (containerMediaEl) {
    gsap.to(containerMediaRef.value!, {
      height: containerMediaEl.children[idx].children[0].clientHeight,
      duration: 0,
    })
  }
})

watch([() => props.hasSaved, () => props.hasLiked], () => {
  initShowLikeSaved = true
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div ref="containerMediaRef" class="keen-slider inline-flex min-w-full select-none">
      <Image
        class="keen-slider__slide"
        v-for="i in images"
        :key="i.id"
        :src="i.src"
        :id-post="id"
      />
      <Video
        class="keen-slider__slide"
        v-for="(video, idx) in videos"
        :key="idx"
        :video="video"
        :id-post="id"
      />
    </div>
    <div
      v-if="isShowPre"
      class="absolute left-0 top-[50%] flex h-[80px] w-[80px] -translate-y-1/2 items-center justify-center rounded-[50%]"
      @click="prev"
    >
      <ArrowIcon_ class="rotate-180 opacity-80" />
    </div>

    <div
      v-if="isShowNext"
      class="absolute right-0 top-[50%] flex h-[80px] w-[80px] -translate-y-1/2 items-center justify-center rounded-[50%]"
      @click="next"
    >
      <ArrowIcon_ class="opacity-80" />
    </div>
    <div
      v-show="totalMedia > 1"
      class="absolute right-[20px] top-[20px] flex min-w-[40px] select-none justify-center rounded-full bg-c2/30 px-[8px] py-[3px] text-[0.75rem] font-[600] text-c1 backdrop-blur-[1px] dark:bg-c1/30 dark:text-c2"
    >
      {{ `${current + 1}/${totalMedia}` }}
    </div>
    <div v-show="initShowLikeSaved">
      <Unlike v-if="hasLiked" />
      <Like v-else />
      <Save v-if="hasSaved" class-name="[&>path]:fill-c11 [&>path]:stroke-c11" />
      <Save v-else class-name="[&>path]:fill-c2 [&>path]:stroke-c2" />
    </div>
  </div>
</template>
