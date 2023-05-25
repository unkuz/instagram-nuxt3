<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import { stopOtherVideoPlaying } from '@/helpers'
import { SizeAvatarEnum } from '@/type'

interface IProps {
  name?: string
  user: any
  id: string | number
  hasRead?: boolean
}

withDefaults(defineProps<IProps>(), {
  name: '',
  hasRead: false,
})
</script>

<template>
  <NuxtLink :to="`/_/stories/${id}`">
    <div
      class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
      @click="stopOtherVideoPlaying"
    >
      <div
        :class="[
          'mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center overflow-hidden rounded-[50%] p-[3px] ',
          hasRead
            ? 'bg-c21/60'
            : 'bg-gradient-to-bl from-[#2de6e6] to-[#c125ff] dark:from-c24 dark:to-c25',
        ]"
      >
        <div class="h-full w-full rounded-[50%] bg-c1 p-[2px] dark:bg-c19">
          <Avatar :size="SizeAvatarEnum.M" :url="user?.profile_pic_url" />
        </div>
      </div>
      <p class="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-[.8rem]">
        {{ user.user_name }}
      </p>
    </div>
  </NuxtLink>
</template>
