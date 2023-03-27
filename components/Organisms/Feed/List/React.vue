<script lang="ts" setup>
import LikeIcon_ from '@/assets/svg/like_icon.svg'
import SaveIcon_ from '@/assets/svg/save_icon.svg'
import ShareIcon_ from '@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@/assets/svg/view_post_icon.svg'
import DotIdxCarousel from '@/components/Atoms/DotIdxCarousel.vue'
import UnlikeIcon from '@/components/Atoms/UnlikeIcon.vue'
import { stopOtherVideoPlaying } from '@/helpers'
import { useFeedStore } from '@/store'

interface IProps {
  hasLiked: boolean
  currentIdx: number
  mediaArr: any
  id: any
  hasSaved: boolean
}

const emit = defineEmits(['current-index-carousel'])

defineProps<IProps>()

const timelineStore = useFeedStore()

const likeUnLike = (id: number) => {
  timelineStore.setToggleLike(id)
}
</script>

<template>
  <div
    :class="[
      'mt-[5px] grid h-[35px] grid-cols-3',
      {
        'grid-cols-2': mediaArr.length < 2,
      },
    ]"
  >
    <div class="flex h-full w-full items-center gap-[12px] md:gap-[10px]">
      <div class="relative" @click="likeUnLike(id)">
        <UnlikeIcon v-if="hasLiked" />
        <LikeIcon_ v-else class="fill-c2 dark:fill-c1" />
      </div>
      <NuxtLink :to="`/_/p/${id}`">
        <ViewPostIcon_ class="fill-c2 dark:fill-c1" @click="stopOtherVideoPlaying" />
      </NuxtLink>
      <ShareIcon_ class="fill-c2 dark:fill-c1" />
    </div>
    <DotIdxCarousel :mediaArr="mediaArr" :current="currentIdx" />
    <div class="flex h-full w-full items-center justify-end">
      <SaveIcon_
        :class="[
          ' dark:[&>path]:stroke-white',
          {
            '[&>path]:fill-c11 [&>path]:!stroke-c11 dark:[&>path]:stroke-c11': hasSaved,
          },
        ]"
        @click="timelineStore.setToggleSave(id)"
      />
    </div>
  </div>
</template>
