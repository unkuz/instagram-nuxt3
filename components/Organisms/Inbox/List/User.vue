<script lang="ts" setup>
import { SizeAvatarEnum } from '@/type'
import { stopOtherVideoPlaying } from '@/helpers'
import Avatar from '@/components/Atoms/Avatar.vue'
import Dot from '@/components/Atoms/Dot.vue'

interface IProps {
  name: string
  avatar: string
  id: string
  hasRead: boolean
}

defineProps<IProps>()
</script>

<template>
  <NuxtLink :to="`/_/stories/${id}`">
    <div
      class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
      @click="stopOtherVideoPlaying"
    >
      <div
        :class="[
          'relative mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center  rounded-[50%] p-[3px] ',
          hasRead ? 'bg-c21/60' : 'bg-gradient-to-bl from-c17 to-c18 dark:from-c24 dark:to-c25',
        ]"
      >
        <div class="h-full w-full rounded-[50%] bg-c1 p-[2px] dark:bg-c19">
          <Avatar :size="SizeAvatarEnum.M" :url="avatar" />
        </div>
        <div class="absolute bottom-0 right-0 bg-white p-[2px] flex justify-center items-center rounded-[50%]">
          <Dot class="relative !h-[15px] !w-[15px] !p-[2px] bottom-auto right-auto" />
        </div>
      </div>
      <p class="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs">
        {{ name }}
      </p>
    </div>
  </NuxtLink>
</template>
