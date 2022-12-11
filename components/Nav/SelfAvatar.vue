<script lang="ts" setup>
import { useAuthStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'
import Avatar from '../Atom/Avatar.vue'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()

const authStore = useAuthStore()
const avatar = computed(() => authStore.data.avatar)

const { T } = SizeAvatarEnum
</script>

<template>
  <div class="select-none">
    <div :class="['rounded-full  p-[1px]  hover:cursor-pointer', { 'bg-c2': isSelect }]">
      <div class="rounded-[50%] bg-c1 p-[1px] dark:bg-c2"><Avatar :size="T" :url="avatar" /></div>
    </div>
  </div>
</template>
