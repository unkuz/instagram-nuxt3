<script lang="ts" setup>
import MoreIcon_ from '@@/assets/svg/more_icon.svg'
import { useMoreStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'
import Avatar from '../Tiny/Avatar.vue'

const { S } = SizeAvatarEnum
interface IProps {
  profile_pic_url: string
  username: string
}
defineProps<IProps>()

const moreStore = useMoreStore()
const showMore = (e: MouseEvent) => {
  e.stopPropagation()
  moreStore.setShow()
}
</script>

<template>
  <div class="h-[60px]">
    <div class="mx-[16px] flex h-full items-center justify-between">
      <div class="flex items-center space-x-[10px] text-[0.8rem]">
        <Avatar :size="S" :url="profile_pic_url" />
        <div class="cursor-pointer">{{ username }}</div>
      </div>
      <div>
        <MoreIcon_ @click="showMore" />
      </div>
    </div>
  </div>
</template>
