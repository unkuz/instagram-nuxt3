<script lang="ts" setup>
import ArrowIcon_ from '~~/assets/svg/arrow_icon.svg'
import { SIZE_HERO_PAGELET } from '~~/constants/mock'
import { IStory } from '~~/models'
import Story from './Story.vue'

interface IProps {
  stories: IStory[]
}

defineProps<IProps>()

const heroPageletRef = ref<HTMLElement>(null)
const startPointX = ref(0)
const isShowPrev = ref(false)
const isShowNext = ref(true)

onMounted(() => {
  if (heroPageletRef && heroPageletRef.value.clientWidth < SIZE_HERO_PAGELET.WIDTH) {
    isShowNext.value = false
  }
})

const handle = (e: MouseEvent, idx: number) => {
  heroPageletRef.value.style.transform = `translateX(${
    startPointX.value - SIZE_HERO_PAGELET.SPACE_SLICE * idx
  }px)`
  startPointX.value -= SIZE_HERO_PAGELET.SPACE_SLICE * idx
  if (
    idx === 1 &&
    Math.abs(startPointX.value - SIZE_HERO_PAGELET.WIDTH) > heroPageletRef.value.clientWidth
  ) {
    isShowNext.value = false
    heroPageletRef.value.style.transform = `translateX(-${
      heroPageletRef.value.clientWidth - SIZE_HERO_PAGELET.WIDTH
    }px)`
    startPointX.value = -(heroPageletRef.value.clientWidth - SIZE_HERO_PAGELET.WIDTH)
  } else {
    isShowNext.value = true
  }
  if (idx === -1 && startPointX.value >= 0) {
    heroPageletRef.value.style.transform = `translateX(0px)`
    startPointX.value = 0
    isShowPrev.value = false
  } else {
    isShowPrev.value = true
  }
}

const handleTouchStart = (e: TouchEvent) => {}
</script>

<template>
  <div
    class="relative inline-flex h-[119px] w-full items-center overflow-hidden border-0 border-gray-200 sm:mb-[24px] sm:border-[1px]"
  >
    <div
      class="flex h-[85px] transition-all duration-500 ease-in-out"
      ref="heroPageletRef"
      @touchstart="handleTouchStart"
    >
      <Story v-for="i in stories" v-bind="i" :key="i.id" />
    </div>
    <div class="absolute top-1/2 right-2 -translate-y-1/2">
      <ArrowIcon_ v-show="isShowNext" @click="handle($event, 1)" />
    </div>
    <div class="absolute top-1/2 left-2 -translate-y-1/2">
      <ArrowIcon_ class="rotate-180" v-show="isShowPrev" @click="handle($event, -1)" />
    </div>
  </div>
</template>
