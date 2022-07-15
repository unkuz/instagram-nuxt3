<script lang="ts" setup>
import { onMounted } from 'vue'
import { SIZE_HERO_PAGELET } from '~~/constants/mock'
import Story from './Story.vue'
import { stories } from '~~/mocks/stories'

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

const handleTouchStart = (e: TouchEvent) => {
  console.log({ e })
}
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
      <Story
        v-for="{ avatar, id, name } in stories"
        :key="id"
        :name="name"
        :avatar="avatar"
        :id="id"
      />
    </div>
    <div class="absolute top-1/2 right-2 -translate-y-1/2">
      <div
        v-if="isShowNext"
        class="relative h-[22px] w-[22px] rounded-full bg-gray-200 sm:block"
        @click="handle($event, 1)"
      >
        <svg
          class="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
    </div>
    <div class="absolute top-1/2 left-2 -translate-y-1/2">
      <div
        v-if="isShowPrev"
        class="relative h-[22px] w-[22px] rounded-full bg-gray-200 sm:block"
        @click="handle($event, -1)"
      >
        <svg
          class="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 rotate-180"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
    </div>
  </div>
</template>
