<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '@/type'
import { useKeenSlider } from 'keen-slider/vue.es'

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
  dragSpeed: 1.2,
  renderMode: 'precision',
})
</script>

<template>
  <div
    class="h-[119px] w-full overflow-hidden bg-transparent p-0 dark:bg-transparent md:mb-[24px] md:bg-c4 md:p-[1px] md:clip-path-cuzknothz"
  >
    <div
      v-cloak
      class="relative flex h-full w-full items-center bg-white dark:bg-c19 md:clip-path-cuzknothz"
    >
      <div ref="container" class="keen-slider h-full pt-[20px]">
        <div v-for="(i, idx) in 10" :key="idx" class="keen-slider__slide">
          <div
            class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
          >
            <div
              class="skeleton mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center overflow-hidden rounded-[50%] p-[3px]"
            >
              <div class="h-full w-full rounded-[50%] bg-c1 p-[2px] dark:bg-c19">
                <Avatar :size="SizeAvatarEnum.M" skeleton />
              </div>
            </div>
            <p
              class="skeleton mt-[5px] h-[15px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs text-transparent"
            >
              hehe
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
