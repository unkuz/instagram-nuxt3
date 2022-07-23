<script lang="ts" setup>
import { isEllipsisActive } from '~~/utils/ellipsText'
interface IProps {
  like_count: number
  caption_text: string
  comments: any
  created_at: any
  user: any
}

defineProps<IProps>()

const isShowMore = ref(false)
const captionRef = ref<HTMLParagraphElement>(null)
const isCaptionEllips = ref(false)

watch(captionRef, () => {
  isCaptionEllips.value = isEllipsisActive(captionRef)
})
</script>

<template>
  <div>
    <div class="mb-[8px] h-[18px] cursor-pointer font-medium">{{ like_count }} likes</div>
    <div :class="`mb-[4px] ${isShowMore ? ' ' : 'h-[62px]'}`">
      <p
        :class="`overflow-hidden text-ellipsis ${isShowMore ? ' ' : 'whitespace-nowrap'}`"
        ref="captionRef"
      >
        <span class="font-medium">{{ user.username }}</span> {{ caption_text }}
      </p>
      <p
        v-if="!isShowMore && isCaptionEllips"
        class="cursor-pointer text-gray-600"
        @click="isShowMore = true"
      >
        ... more
      </p>
      <p class="cursor-pointer text-gray-600">View all {{ comments.length }} comments</p>
    </div>
    <div class="mb-[16px] h-[18px] text-gray-600">{{ created_at }} DAY AGO</div>
  </div>
</template>
