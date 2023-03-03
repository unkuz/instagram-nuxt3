<script setup lang="ts">
interface IProps {
  likeCount: number
  commentCount: number
}

defineProps<IProps>()
const emit = defineEmits(['scrollToComment'])

const scrollToComment = () => {
  emit('scrollToComment')
}
</script>

<template>
  <div class="mb-[5px] flex h-[18px] cursor-pointer select-none gap-[5px] text-[0.85rem]">
    <span class="text-red-400"
      ><span :title="`${likeCount} likes`">{{ `${$formatNum(likeCount)} likes` }}</span>
    </span>
    <span>|</span>
    <span class="text-fuchsia-400" @click="scrollToComment">
      <span :title="`${commentCount} comments`">{{ `${$formatNum(commentCount)} comments` }}</span>
    </span>
  </div>
</template>
