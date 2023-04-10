<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import Button from '@/components/Atoms/Button.vue'
import { SizeAvatarEnum } from '@/type'
import { useFollowStore } from '@/store'

interface IProps {
  avatar: string
  user_name: string
  id: number
  isFollowing: boolean
}

const props = defineProps<IProps>()

const followStore = useFollowStore()

const handleUnfollow = () => {
  followStore.unfollow(props.user_name)
}

const handleFollow = () => {
  followStore.follow(props.id)
}
</script>

<template>
  <div class="flex h-[48px] items-center justify-between py-[8px]">
    <NuxtLink :to="`/${user_name}`">
      <Avatar :size="SizeAvatarEnum.S" :url="avatar" />
    </NuxtLink>

    <div class="w-[185px]">
      <NuxtLink :to="`/${user_name}`">
        <p class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-medium">
          {{ user_name }}
        </p>
      </NuxtLink>
      <p class="text-[0.8rem] text-c3 dark:text-c21">Suggested for you</p>
    </div>
    <div class="flex w-[55px] cursor-pointer justify-end text-[0.8rem] font-[500] [&>div]:px-[6px]">
      <Button
        v-if="isFollowing"
        @click="handleUnfollow"
        text="Unfollow"
        class="!bg-c8 !px-[8px] !py-[4px] !text-c9"
      />
      <Button
        v-else
        text="Follow"
        @click="handleFollow"
        class="!bg-c10 !px-[8px] !py-[4px] !text-c7"
      />
    </div>
  </div>
</template>
