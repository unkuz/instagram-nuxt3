<script lang="ts" setup>
import { useCarousel } from '~~/composables/useCarousel'
import { useDoubleClick } from '~~/composables/useDoubleClick'
import ArrowIcon_ from '~~/assets/svg/arrow_icon.svg'

interface IProps {
  images: any
  videos: any
}
const emit = defineEmits(['currentIndexCarousel'])

const props = defineProps<IProps>()

const containerMediaRef = ref<HTMLDivElement>(null)

useDoubleClick(
  containerMediaRef,
  () => {},
  () => {}
)

const { next, prev, current } = useCarousel(containerMediaRef)

watch(current, (idx) => {
  emit('currentIndexCarousel', idx)
})

const totalMedia = computed(() => props.images.concat(props.videos).length)
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="inline-flex" ref="containerMediaRef">
      <div v-if="images" v-for="i in images" :key="i.id" class="min-w-full">
        <img class="min-h-full min-w-full cursor-pointer object-cover" :src="i.src" alt="" />
      </div>
      <div v-if="videos" class="min-w-full overflow-hidden" v-for="i in videos" :key="i.id">
        <video :src="i.src" loop class="cursor-pointer" />
      </div>
    </div>
    <div
      class="absolute left-5 top-[50%] flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20"
      @click="prev"
    >
      <ArrowIcon_ class="h-[12px] w-[12px] rotate-180" />
    </div>

    <div
      class="absolute right-5 top-[50%] flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20"
      @click="next"
    >
      <ArrowIcon_ class="h-[12px] w-[12px]" />
    </div>
    <div
      class="absolute top-[20px] right-[20px] rounded-full bg-black/50 px-[8px] py-[2px] text-[0.8rem] text-white"
    >
      {{ `${current + 1}/${totalMedia}` }}
    </div>
  </div>
</template>
