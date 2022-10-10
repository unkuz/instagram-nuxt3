<script lang="ts" setup>
import { useAuthStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'
import clsx from 'classnames'
import Avatar from '../Tiny/Avatar.vue'

interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()

const authStore = useAuthStore()
const { T } = SizeAvatarEnum
</script>

<template>
  <div class="select-none">
    <div :class="clsx('rounded-full  p-[1px]  hover:cursor-pointer', { 'bg-black/80': isSelect })">
      <div class="rounded-[50%] bg-white p-[1px]"><Avatar :size="T" :url="authStore.avatar" /></div>
    </div>
  </div>
</template>
