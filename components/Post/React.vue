<script lang="ts" setup>
import LikeIcon_ from '~~/assets/svg/like_icon.svg'
import SaveIcon_ from '~~/assets/svg/save_icon.svg'
import ShareIcon_ from '~~/assets/svg/share_icon.svg'
import ViewPostIcon_ from '~~/assets/svg/view_post_icon.svg'
import { APP_ROUTES } from '~~/routes'
import { useTimeLineStore } from '~~/store/timeline'
import { useViewPostDetailStore } from '~~/store/viewPostDetail'
import UnlikeIcon from '../Tiny/UnlikeIcon.vue'

interface IProps {
  has_liked: boolean
  currentIdx: number
  mediaArr: any
  id: any
}

const props = defineProps<IProps>()
const viewPostDetailStore = useViewPostDetailStore()
const timelineStore = useTimeLineStore()

const viewPost = () => {
  viewPostDetailStore.setPostDetail(props.id)
  navigateTo(`${APP_ROUTES.HOME}/p/${props.id}`)
}

const toggleLike = () => {
  timelineStore.setToggleLike(props.id)
}
</script>

<template>
  <div class="mt-[4px] grid h-[40px] grid-cols-3">
    <div class="flex h-full w-full items-center space-x-[10px]">
      <div @click="toggleLike"><LikeIcon_ v-if="!has_liked" /> <UnlikeIcon v-else /></div>
      <ViewPostIcon_ @click="viewPost" />
      <ShareIcon_ />
    </div>
    <div class="flex items-center justify-center space-x-[4px]">
      <div
        v-for="(_i, idx) in mediaArr"
        :key="idx"
        :class="`h-[6px] w-[6px]  rounded-[50%] bg-white ${
          currentIdx === idx ? 'bg-blue-500' : 'bg-[#b9b9b9]'
        }`"
      ></div>
    </div>
    <div class="flex h-full w-full items-center justify-end">
      <SaveIcon_ />
    </div>
  </div>
</template>
