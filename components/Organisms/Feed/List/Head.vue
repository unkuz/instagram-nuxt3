<script lang="ts" setup>
import MoreIcon_ from '@/assets/svg/more_icon.svg'
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { useMoreStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { TypeMoreEnum } from '@/store'
import PreviewProfile from '@/components/Molecules/PreviewProfile.vue'

const moreStore = useMoreStore()

interface IProps {
  avatar: string
  userName: string
  feed: any
}

const props = defineProps<IProps>()

const isShowBriefProfile = $ref(false)

const showMore = () => {
  moreStore.set({
    type: TypeMoreEnum.FEED,
    data: props.feed,
  })
}

const jeje = () => {
  console.log('asdfhjsdjkf')
}
</script>

<template>
  <div class="h-[60px]">
    <div class="mx-[16px] flex h-full items-center justify-between">
      <div class="flex items-center space-x-[10px] text-[0.8rem]">
        <NuxtLink :to="`/${userName}/`">
          <div
            class="relative"
            @mouseover="isShowBriefProfile = true"
            @mouseleave="isShowBriefProfile = false"
          >
            <Avatar :size="SizeAvatarEnum.S" :url="avatar" />
            <div
              :class="[
                'absolute top-[40px] z-10 hidden duration-200',
                {
                  'block ': isShowBriefProfile,
                },
              ]"
            >
              <PreviewProfile v-bind="feed.user" />
            </div>
          </div>
        </NuxtLink>

        <NuxtLink :to="`/${userName}/`"><TagName :name="userName" /></NuxtLink>
      </div>
      <div>
        <MoreIcon_ class="fill-c2 dark:fill-c1" @click.stop="showMore" />
      </div>
    </div>
  </div>
</template>
