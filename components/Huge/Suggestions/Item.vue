<script lang="ts" setup>
import Avatar from '@@/components/Atoms/Avatar.vue'
import Button from '@@/components/Atoms/Button.vue'
import { SizeAvatarEnum } from '@@/type'

const { S } = SizeAvatarEnum

interface IProps {
  avatar: string
  name: string
  id: string
}

defineProps<IProps>()

let isFollow = $ref(false)
const toggleFollow = () => (isFollow = !isFollow)
</script>

<template>
  <div class="flex h-[48px] items-center justify-between py-[8px]">
    <NuxtLink :to="`/${id}`">
      <Avatar :size="S" :url="avatar" />
    </NuxtLink>

    <div class="w-[185px]">
      <NuxtLink :to="`/${id}`">
        <p class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-medium">
          {{ name }}
        </p>
      </NuxtLink>
      <p class="text-[0.8rem] text-c3 dark:text-c21">Suggested for you</p>
    </div>
    <div
      class="flex w-[55px] cursor-pointer justify-end text-[0.8rem] font-[500] [&>div]:px-[6px]"
      @click="toggleFollow"
    >
      <Button v-if="isFollow" text="Unfollow" class="bg-c8 !py-[4px] !px-[8px] text-c9" />
      <Button v-else text="Follow" class="bg-c10 !py-[4px] !px-[8px] text-c7" />
    </div>
  </div>
</template>
