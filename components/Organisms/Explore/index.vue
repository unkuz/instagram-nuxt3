<script lang="ts" setup>
import Square from './Square.vue'

interface IProps {
  list: string[] | undefined[]
}
const props = defineProps<IProps>()

let sequence: number[] = []

const generateSequence = (): void => {
  let num = -2
  while (num <= props.list.length - 1) {
    if (sequence.length % 2 === 0) {
      num += 2
      sequence.push(num)
    } else {
      num += 4
      sequence.push(num)
    }
  }
}

watch(() => props.list.length, generateSequence, { immediate: true })

const isMutiple = (i: any) => {
  if (i.images.length === 1 && i.videos.length > 0) {
    return true
  } else if (i.images.length > 1) {
    return true
  }
  return false
}
</script>

<template>
  <div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <template v-for="(i, idx) in list" :key="i.id">
        <Square
          :is-big="sequence.includes(idx)"
          :src="i?.images?.[0]?.src ?? i?.videos?.[0]?.src"
          :comments="i.comments.length"
          :likes="i.likes.length"
          :isMutiple="isMutiple(i)"
        />
      </template>
    </div>
  </div>
</template>
