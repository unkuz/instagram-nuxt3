<script lang="ts" setup>
import clsx from 'classnames'
import { useAuthStore } from '~~/store/auth'
import { SizeAvatarEnum } from '~~/type'
import Avatar from '../Tiny/Avatar.vue'

interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()

const authStore = useAuthStore()
const { T } = SizeAvatarEnum

console.log(props.isSelect)
</script>

<template>
  <div class="select-none">
    <div :class="clsx('rounded-full  p-[1px]  hover:cursor-pointer', { 'bg-black/80': isSelect })">
      <div class="rounded-[50%] bg-white p-[1px]"><Avatar :size="T" :url="authStore.avatar" /></div>
    </div>
  </div>
</template>
