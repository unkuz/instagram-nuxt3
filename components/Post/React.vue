<script lang="ts" setup>
import LikeIcon_ from '@@/assets/svg/like_icon.svg'
import SaveIcon_ from '@@/assets/svg/save_icon.svg'
import ShareIcon_ from '@@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@@/assets/svg/view_post_icon.svg'
import { useTimeLineStore } from '@@/store'
import clsx from 'classnames'
import { stopOtherVideoPlaying } from '~~/helpers'
import UnlikeIcon from '@@/components/Atom/UnlikeIcon.vue'

interface IProps {
  hasLiked: boolean
  currentIdx: number
  mediaArr: any
  id: any
  hasSaved: boolean
}

defineProps<IProps>()

const timelineStore = useTimeLineStore()
</script>

<template>
  <div
    :class="
      clsx('mt-[5px] grid h-[35px] grid-cols-3', {
        'grid-cols-2': mediaArr.length < 2,
      })
    "
  >
    <div class="flex h-full w-full items-center space-x-[10px]">
      <div @click="timelineStore.setToggleLike(id)" class="relative">
        <div v-if="hasLiked">
          <UnlikeIcon />
        </div>
        <div v-else>
          <LikeIcon_ />
        </div>
      </div>
      <NuxtLink :to="`/_/p/${id}`">
        <ViewPostIcon_ @click="stopOtherVideoPlaying" />
      </NuxtLink>
      <ShareIcon_ />
    </div>
    <div v-if="mediaArr.length > 1" class="flex items-center justify-center space-x-[4px]">
      <div
        v-for="(_i, idx) in mediaArr"
        :key="idx"
        :class="
          clsx('h-[6px] w-[6px]  rounded-[50%]  bg-[#b9b9b9]', {
            'bg-blue-500': currentIdx === idx,
          })
        "
      ></div>
    </div>
    <div class="flex h-full w-full items-center justify-end">
      <SaveIcon_
        @click="timelineStore.setToggleSave(id)"
        :class="
          clsx('', {
            '[&>path]:fill-[#ff8800] [&>path]:stroke-[#ff8800]': hasSaved,
          })
        "
      />
    </div>
  </div>
</template>
