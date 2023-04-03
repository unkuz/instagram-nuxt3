<script lang="ts" setup>
import { gsap } from 'gsap'
import Image from './Image.vue'
import Like from './Like.vue'
import Save from './Save.vue'
import Unlike from './Unlike.vue'
import Video from './Video.vue'
import { stopOtherVideoPlaying } from '@/helpers'
import { useCarousel } from '@/composables'
import ArrowIcon_ from '@/assets/svg/arrow_icon.svg'

interface IProps {
  images: any
  videos: any
  hasLiked: boolean
  id: number
  hasSaved: boolean
}

let initShowLikeSaved = $ref(false)
const props = defineProps<IProps>()
const emit = defineEmits(['currentIndexCarousel'])
const containerMediaRef = ref<HTMLDivElement>()

const { next, prev, current } = useCarousel(containerMediaRef)

const isShowPre = computed<boolean>(() => unref(current) !== 0)
const isShowNext = computed<boolean>(
  () => unref(current) !== props.images.concat(props.videos).length - 1
)
const totalMedia = computed<number>(() => props.images.concat(props.videos).length)

watch(
  () => current,
  (idx) => {
    emit('currentIndexCarousel', idx)
    stopOtherVideoPlaying()
    if (containerMediaRef.value) {
      gsap.to(containerMediaRef.value, {
        height: containerMediaRef.value.children[unref(idx)].children[0].clientHeight,
        duration: 0,
      })
    }
  }
)

watch([() => props.hasSaved, () => props.hasLiked], () => {
  initShowLikeSaved = true
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div ref="containerMediaRef" class="inline-flex min-w-full select-none">
      <Image v-for="i in images" :key="i.id" :src="i.src" :id-post="id" />
      <Video v-for="(video, idx) in videos" :key="idx" :video="video" :id-post="id" />
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
      class="absolute right-[20px] top-[20px] flex min-w-[40px] select-none justify-center rounded-full bg-c2 px-[8px] py-[3px] text-[0.75rem] font-[600] text-c1 dark:bg-c1 dark:text-c2"
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
