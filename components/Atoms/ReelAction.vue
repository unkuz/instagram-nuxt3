<script setup lang="ts">
import LikeIcon_ from '@@/assets/svg/like_icon.svg'
import ShareIcon_ from '@@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@@/assets/svg/view_post_icon.svg'
import UnlikeIcon from '@@/components/Atoms/UnlikeIcon.vue'

interface IProps {
  totalLike: number
  totalComment: number
}
defineProps<IProps>()
const hasLiked = ref(true)
</script>
<template>
  <div class="absolute bottom-[60px] right-[30px] flex flex-col gap-[20px] duration-200 md:bottom-[80px]">
    <div class="flex flex-col items-center gap-[5px]">
      <UnlikeIcon v-if="hasLiked" />
      <LikeIcon_ v-else class="fill-c2 dark:fill-c1" />
      <span>{{ $formatNum(totalLike) }}</span>
    </div>
    <div class="flex flex-col items-center gap-[5px]">
      <ViewPostIcon_ class="fill-c2 dark:fill-c1" />
      <span>{{ $formatNum(totalComment) }}</span>
    </div>

    <div class="flex flex-col items-center gap-[5px]">
      <ShareIcon_ class="fill-c2 dark:fill-c1" /> <span>{{ 0 }}</span>
    </div>
  </div>
</template>
