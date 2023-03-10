<script setup lang="ts">
import { TypePostEnum } from '@/type'

let choose = $ref<TypePostEnum>(TypePostEnum.NONE)

const type = [
  { name: 'Feed', type: TypePostEnum.FEED },
  { name: 'Reel', type: TypePostEnum.REEL },
  { name: 'Story', type: TypePostEnum.STORY },
]
</script>

<template>
  <div :class="['mb-[20px] flex w-full flex-col  items-center  duration-100']">
    <div class="flex w-full justify-center font-[600]">Choose</div>

    <div class="mt-[20px] flex w-full gap-[10px]">
      <div
        v-for="(i, idx) in type"
        :index="idx"
        @click="choose = i.type"
        class="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] border-[2px] border-dashed border-c17"
      >
        {{ i.name }}
      </div>
    </div>
  </div>
</template>
