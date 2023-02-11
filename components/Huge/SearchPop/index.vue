<script lang="ts" setup>
import Arrow from '@/components/Utils/Arrow.vue'
import { onClickOutside } from '@vueuse/core'

const searchResultRef = ref<HTMLDivElement>()
let isShow = $ref(true)

onClickOutside(searchResultRef, () => {
  isShow = false
})
</script>

<template>
  <div v-if="isShow" ref="searchResultRef" class="absolute top-0">
    <div class="absolute top-[19px]">
      <Arrow />
    </div>
    <div
      class="shadow-custom absolute right-1/2 top-[55px] z-20 flex h-[350px] w-[375px] translate-x-1/2 items-center overflow-scroll rounded-md border-[1px] border-c4 bg-c1"
    >
      <p class="w-full text-center text-sm">No results found.</p>
    </div>
  </div>
</template>
