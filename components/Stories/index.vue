<script lang="ts" setup>
import { onMounted } from 'vue'
import { SIZE_HERO_PAGELET } from '~~/constants/mock'
import Story from './Story.vue'

const stories = [
  {
    name: 'sedtattoo',
    avatar: '/suggest/284584637_285456953721363_220426031922693229_n.jpg',
    id: 'sedtattoo',
  },
  {
    name: 'nookke_ke',
    avatar: '/suggest/291983943_405778434919413_2405751568009775521_n.jpg',
    id: 'nookke_ke',
  },
  {
    name: 'farelyph',
    avatar: '/suggest/144128347_784776258788491_1358360609030238183_n.jpg',
    id: 'farelyph',
  },
  {
    name: 'kaaninggy_',
    avatar: '/suggest/290390138_1085656348825173_8947081895696353226_n.jpg',
    id: 'kaaninggy_',
  },
  {
    name: 'gabi_the_minischnauzer',
    avatar: '/suggest/247431843_198274605668472_397576996448622_n.jpg',
    id: 'gabi_the_minischnauzer',
  },
  {
    name: 'cryexofficial',
    avatar: '/suggest/285178340_705143053896837_3008849651841634176_n.jpg',
    id: 'cryexofficial',
  },
  {
    name: 'elizentt',
    avatar: '/suggest/272887264_1317711585344508_1039895395246482301_n.jpg',
    id: 'elizentt',
  },
  {
    name: 'camokr',
    avatar: '/suggest/293329529_545430770659089_1339469674371699030_n.jpg',
    id: 'camokr',
  },
]

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
