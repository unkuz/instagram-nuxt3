<script lang="ts" setup>
import MoreIcon_ from '@@/assets/svg/more_icon.svg'
import { useMoreStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'
import Avatar from '@@/components/Atom/Avatar.vue'

const moreStore = useMoreStore()
const { S } = SizeAvatarEnum

interface IProps {
  avatar: string
  userName: string
}

defineProps<IProps>()

const showMore = (e: MouseEvent) => {
  e.stopPropagation()
  moreStore.setShow()
}
</script>

<template>
  <div class="h-[60px]">
    <div class="mx-[16px] flex h-full items-center justify-between">
      <div class="flex items-center space-x-[10px] text-[0.8rem]">
        <Avatar :size="S" :url="avatar" />
        <div class="cursor-pointer">{{ userName }}</div>
      </div>
      <div>
        <MoreIcon_ @click="showMore" />
      </div>
    </div>
  </div>
</template>
