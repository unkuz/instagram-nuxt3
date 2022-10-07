<script lang="ts" setup>
import { SizeAvatarEnum } from '~~/type'
import Avatar from '../Tiny/Avatar.vue'

const { M } = SizeAvatarEnum

interface IProps {
  name: string
  avatar: string
  id: string
}

defineProps<IProps>()
</script>

<template>
  <div
    @click="navigateTo(`/_/stories/${id}`)"
    class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer"
  >
    <div
      class="mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center overflow-hidden rounded-[50%] bg-gradient-to-bl from-[#ab21e294] to-[#00c3ff] p-[3px]"
    >
      <div class="h-full w-full rounded-[50%] bg-white p-[2px]">
        <Avatar :size="M" :url="avatar" />
      </div>
    </div>
    <p class="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs">
      {{ name }}
    </p>
  </div>
</template>
