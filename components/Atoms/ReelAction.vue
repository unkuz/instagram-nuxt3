<script setup lang="ts">
import LikeIcon_ from '@/assets/svg/like_icon.svg'
import ShareIcon_ from '@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@/assets/svg/view_post_icon.svg'
import UnlikeIcon from '@/components/Atoms/UnlikeIcon.vue'
import { useSlashStore } from '@/store'

interface IProps {
  totalLike: number
  totalComment: number
}
defineProps<IProps>()

const slashStore = useSlashStore()
const hasLiked = ref(true)

const like = () => {
  slashStore.setShowAnimation('love')
}

const unlike = () => slashStore.setHideSlash()
</script>
<template>
  <div
    class="absolute bottom-[15px] right-[15px] flex flex-col gap-[20px] text-c1 duration-200 md:bottom-[50px]"
  >
    <div class="flex flex-col items-center gap-[5px]">
      <UnlikeIcon @click="like" v-if="hasLiked" />
      <LikeIcon_ @click="unlike" v-else class="!fill-c1" />
      <span>{{ $formatNum(totalLike) }}</span>
    </div>
    <div class="flex flex-col items-center gap-[5px]">
      <ViewPostIcon_ class="!fill-c1" />
      <span>{{ $formatNum(totalComment) }}</span>
    </div>

    <div class="flex flex-col items-center gap-[5px]">
      <ShareIcon_ class="!fill-c1" /> <span>{{ 0 }}</span>
    </div>
  </div>
</template>
