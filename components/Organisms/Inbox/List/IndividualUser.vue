<script lang="ts" setup>
import { SizeAvatarEnum } from '@/type'
import { stopOtherVideoPlaying } from '@/helpers'
import Avatar from '@/components/Atoms/Avatar.vue'
import Dot from '@/components/Atoms/Dot.vue'
import { useInboxListUserStore } from '@/store'

interface IProps {
  user_name: string
  profile_pic_url: string
  id: number | string
  has_read_story: boolean
  is_online: boolean
}

const props = defineProps<IProps>()

const inboxListUserStore = useInboxListUserStore()

const inbox = () => {
  const recipient = props.user_name
  inboxListUserStore.inbox({
    recipient,
  })
}
</script>

<template>
  <div @click="inbox">
    <div
      class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
      @click="stopOtherVideoPlaying"
    >
      <div
        :class="[
          'relative mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center  rounded-[50%] p-[3px] ',
          has_read_story
            ? 'bg-c21/60'
            : 'bg-gradient-to-bl from-c17 to-c18 dark:from-c24 dark:to-c25',
        ]"
      >
        <div class="h-full w-full rounded-[50%] bg-c1 p-[2px] dark:bg-c19">
          <Avatar :size="SizeAvatarEnum.M" :url="profile_pic_url" />
        </div>
        <div
          class="absolute bottom-0 right-0 flex items-center justify-center rounded-[50%] bg-white p-[2px]"
        >
          <Dot
            :class="[
              'relative bottom-auto right-auto !h-[15px] !w-[15px] !p-[2px]',
              is_online ? 'bg-c15' : 'bg-c20/80',
            ]"
          />
        </div>
      </div>
      <p class="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs">
        {{ user_name }}
      </p>
    </div>
  </div>
</template>
