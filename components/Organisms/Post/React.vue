<script lang="ts" setup>
import LikeIcon_ from '@/assets/svg/like_icon.svg'
import SaveIcon_ from '@/assets/svg/save_icon.svg'
import ShareIcon_ from '@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@/assets/svg/view_post_icon.svg'
import UnlikeIcon from '@/components/Atoms/UnlikeIcon.vue'
import { useTailwindBreakPoint } from '@/composables'
import { stopOtherVideoPlaying } from '@/helpers'
import { useFeedStore, useSlashStore } from '@/store'
import { APP_CONFIGS } from '@/configs'

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

const likeUnLike = (idPost: string) => {
  timelineStore.setToggleLike(idPost)
}

const goTo = (idx: number) => emit('current-index-carousel', idx)
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
    <div class="flex items-center justify-center space-x-[4px]">
      <div
        v-for="(_i, idx) in mediaArr.slice(0, APP_CONFIGS.MAX_DOT_CAROUSEL)"
        :key="idx"
        :class="[
          'h-[6px] w-[6px]  cursor-pointer  rounded-[50%]',
          currentIdx === idx ? 'bg-c7 dark:bg-c7' : 'bg-c3 dark:bg-c1',
        ]"
        @click="goTo(idx)"
      />
      <div
        v-if="mediaArr.length > APP_CONFIGS.MAX_DOT_CAROUSEL"
        :class="[
          'text-[.8rem] font-[600] ',
          {
            'text-c7 dark:text-c7': currentIdx > APP_CONFIGS.MAX_DOT_CAROUSEL,
          },
        ]"
      >
        {{ `+${mediaArr.length - APP_CONFIGS.MAX_DOT_CAROUSEL}` }}
      </div>
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
