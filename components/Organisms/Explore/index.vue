<script lang="ts" setup>
import Square from './Square.vue'

interface IProps {
  cluster: string[] | undefined[]
  idx: number
}
defineProps<IProps>()

const random = $ref(Math.random())
</script>

<template>
  <div>
    <div
      v-if="(idx + 1) % 2 === 0"
      class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]"
    >
      <Square v-if="cluster?.[0]?.images?.[0]?.src" :img="cluster?.[0]?.images?.[0]?.src" />
      <Square v-if="cluster?.[1]?.images?.[0]?.src" :is-big="true" :img="cluster?.[1]?.images?.[0]?.src" />
      <Square v-if="cluster?.[2]?.images?.[0]?.src" :img="cluster?.[2]?.images?.[0]?.src" />
    </div>

    <div v-else class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square v-if="cluster?.[0]?.images?.[0]?.src" :is-big="true" :img="cluster?.[0]?.images?.[0]?.src" />
      <Square v-if="cluster?.[1]?.images?.[0]?.src" :img="cluster?.[1]?.images?.[0]?.src" />
      <Square v-if="cluster?.[2]?.images?.[0]?.src" :img="cluster?.[2]?.images?.[0]?.src" />
    </div>
  </div>
</template>
