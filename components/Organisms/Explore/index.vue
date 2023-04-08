<script lang="ts" setup>
import Square from './Square.vue'

interface IProps {
  list: string[] | undefined[]
}
const props = defineProps<IProps>()

let bigIdx: number[] = []

const generateSequence = (): void => {
  let num = -2
  while (num <= props.list.length - 1) {
    if (bigIdx.length % 2 === 0) {
      num += 2
      bigIdx.push(num)
    } else {
      num += 4
      bigIdx.push(num)
    }
  }
}

watch(() => props.list.length, generateSequence, { immediate: true })

const isMutiple = (i: any) => (i.images.length === 1 && i.videos.length > 0) || i.images.length > 1
</script>

<template>
  <div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <template v-for="(i, idx) in list" :key="i.id">
        <Square
          :is-big="bigIdx.includes(idx)"
          :src="i?.images?.[0]?.src ?? i?.videos?.[0]?.src"
          :comments="i.comments.length"
          :likes="i.likes.length"
          :isMutiple="isMutiple(i)"
        />
      </template>
    </div>
  </div>
</template>
