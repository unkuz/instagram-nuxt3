<script lang="ts" setup>
import LikeIcon_ from '@@/assets/svg/like_icon.svg'
import SaveIcon_ from '@@/assets/svg/save_icon.svg'
import ShareIcon_ from '@@/assets/svg/share_icon.svg'
import ViewPostIcon_ from '@@/assets/svg/view_post_icon.svg'
import { useTimeLineStore, useViewPostDetailStore } from '@@/store'
import clsx from 'classnames'
import UnlikeIcon from '../Tiny/UnlikeIcon.vue'

interface IProps {
    has_liked: boolean
    currentIdx: number
    mediaArr: any
    id: any
}

defineProps<IProps>()
const timelineStore = useTimeLineStore()





</script>

<template>
    <div :class="clsx('mt-[5px] grid h-[35px] grid-cols-3', {
        'grid-cols-2': mediaArr.length < 2
    })">
        <div class="flex h-full w-full items-center space-x-[10px]">
            <div @click="timelineStore.setToggleLike(id)">
                <LikeIcon_ v-if="!has_liked" />
                <UnlikeIcon v-else />
            </div>
            <ViewPostIcon_ @click="navigateTo(`/_/p/${id}`)" />
            <ShareIcon_ />
        </div>
        <div v-if="mediaArr.length > 1" class="flex items-center justify-center space-x-[4px]">
            <div v-for="(_i, idx) in mediaArr" :key="idx" :class="
    clsx('h-[6px] w-[6px]  rounded-[50%]  bg-[#b9b9b9]', {
        'bg-blue-500': currentIdx === idx,
    })
            "></div>
        </div>
        <div class="flex h-full w-full items-center justify-end">
            <SaveIcon_ />
        </div>
    </div>
</template>
