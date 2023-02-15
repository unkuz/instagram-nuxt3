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
      <Square v-if="cluster[0]" :img="cluster[0]" />
      <Square v-if="cluster[1]" :is-big="true" :img="cluster[1]" />
      <Square v-if="cluster[2]" :img="cluster[2]" />
    </div>

    <div v-else class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square v-if="cluster[0]" :is-big="true" :img="cluster[0]" />
      <Square v-if="cluster[1]" :img="cluster[1]" />
      <Square v-if="cluster[2]" :img="cluster[2]" />
    </div>
  </div>
</template>
