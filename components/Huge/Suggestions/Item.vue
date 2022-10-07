<script lang="ts" setup>
import { SizeAvatarEnum } from '~~/type'
import Avatar from '~~/components/Tiny/Avatar.vue'

const { S } = SizeAvatarEnum

interface IProps {
  avatar: string
  name: string
  id: string
}
const props = defineProps<IProps>()

const isFollow = ref(false)

const toggleFollow = () => (isFollow.value = !isFollow.value)

const goToAccount = () => {
  navigateTo(`/${props.id}`)
}
</script>

<template>
  <div class="flex h-[48px] items-center justify-between py-[8px]">
    <div @click="goToAccount">
      <Avatar :size="S" :url="avatar" />
    </div>
    <div class="w-[185px]">
      <p
        @click="goToAccount"
        class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-medium"
      >
        {{ name }}
      </p>
      <p class="text-[0.8rem] text-gray-600">Suggested for you</p>
    </div>
    <div class="flex w-[55px] cursor-pointer justify-end text-[0.8rem]" @click="toggleFollow">
      <span v-if="isFollow" class="text-[#1da0f6]">Follow</span>
      <span v-else class="text-[#1da0f6]">Unfollow</span>
    </div>
  </div>
</template>
