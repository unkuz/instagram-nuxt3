<script lang="ts" setup>
import Item from "./Item.vue";
import { SIZE_HERO_PAGELET } from "@/constants/mock";

const heroPageletRef = ref<HTMLElement>(null);
const startPointX = ref(0);
const isShowPrev = ref(false);
const isShowNext = ref(true);

onMounted(() => {
  if (
    heroPageletRef &&
    heroPageletRef.value.clientWidth < SIZE_HERO_PAGELET.WIDTH
  ) {
    isShowNext.value = false;
  }
});

const handle = (e: MouseEvent, idx: number) => {
  heroPageletRef.value.style.transform = `translateX(${
    startPointX.value - 500 * idx
  }px)`;
  startPointX.value -= 500 * idx;
  if (
    idx === 1 &&
    Math.abs(startPointX.value - SIZE_HERO_PAGELET.WIDTH) >
      heroPageletRef.value.clientWidth
  ) {
    isShowNext.value = false;
    heroPageletRef.value.style.transform = `translateX(-${
      heroPageletRef.value.clientWidth - SIZE_HERO_PAGELET.WIDTH
    }px)`;
    startPointX.value = -(
      heroPageletRef.value.clientWidth - SIZE_HERO_PAGELET.WIDTH
    );
  } else {
    isShowNext.value = true;
  }
  if (idx === -1 && startPointX.value >= 0) {
    heroPageletRef.value.style.transform = `translateX(0px)`;
    startPointX.value = 0;
    isShowPrev.value = false;
  } else {
    isShowPrev.value = true;
  }
};
</script>

<template>
  <div
    class="relative mb-[24px] inline-flex h-[119px] w-[614px] items-center overflow-hidden border-[1px] border-gray-200"
  >
    <div class="flex h-[85px]" ref="heroPageletRef">
      <Item v-for="(i, idx) in Array.from(Array(20).keys())" :key="idx" />
    </div>
    <div
      v-if="isShowNext"
      class="absolute top-1/2 right-2 h-[22px] w-[22px] -translate-y-1/2 rounded-full bg-gray-200"
      @click="handle($event, 1)"
    ></div>
    <div
      v-if="isShowPrev"
      class="absolute top-1/2 left-2 h-[22px] w-[22px] -translate-y-1/2 rounded-full bg-gray-200"
      @click="handle($event, -1)"
    ></div>
  </div>
</template>
