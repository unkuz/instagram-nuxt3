<script lang="ts" setup>
import LikeIcon_ from '@/assets/svg/like_icon.svg'
import SaveIcon_ from '@/assets/svg/save_icon.svg'
import ShareIcon_ from '@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@/assets/svg/view_post_icon.svg'
import UnlikeIcon from '@/components/Atoms/UnlikeIcon.vue'
import { useFeedStore } from '@/store'
import { stopOtherVideoPlaying } from '@/helpers'

interface IProps {
  hasLiked: boolean
  currentIdx: number
  mediaArr: any
  id: any
  hasSaved: boolean
}

defineProps<IProps>()

const timelineStore = useFeedStore()
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
    <div class="flex h-full w-full items-center space-x-[10px]">
      <div class="relative" @click="timelineStore.setToggleLike(id)">
        <div v-if="hasLiked">
          <UnlikeIcon />
        </div>
        <div v-else>
          <LikeIcon_ class="fill-c2 dark:fill-c1" />
        </div>
      </div>
      <NuxtLink :to="`/_/p/${id}`">
        <ViewPostIcon_ class="fill-c2 dark:fill-c1" @click="stopOtherVideoPlaying" />
      </NuxtLink>
      <ShareIcon_ class="fill-c2 dark:fill-c1" />
    </div>
    <div v-if="mediaArr.length > 1" class="flex items-center justify-center space-x-[4px]">
      <div
        v-for="(_i, idx) in mediaArr"
        :key="idx"
        :class="[
          'h-[6px] w-[6px]  rounded-[50%]  bg-c3 dark:bg-c1',
          {
            'bg-c7 dark:bg-c7': currentIdx === idx,
          },
        ]"
      />
    </div>
    <div class="flex h-full w-full items-center justify-end">
      <SaveIcon_
        :class="[
          ' dark:[&>path]:stroke-white',
          {
            '[&>path]:fill-c11 [&>path]:stroke-c11 dark:[&>path]:stroke-c11': hasSaved,
          },
        ]"
        @click="timelineStore.setToggleSave(id)"
      />
    </div>
  </div>
</template>
