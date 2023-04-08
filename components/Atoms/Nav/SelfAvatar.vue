<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import { useAuthStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { BASE_URL_API } from '@/apis'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()

const authStore = useAuthStore()
const avatar = computed(() => authStore.data.user?.profile_pic_url)
</script>

<template>
  <div class="select-none">
    <div :class="['rounded-full  p-[1px]  hover:cursor-pointer', { 'bg-c2': isSelect }]">
      <div class="rounded-[50%] bg-c1 p-[1px] dark:bg-c2">
        <Avatar :size="SizeAvatarEnum.T" :url="avatar" />
      </div>
    </div>
  </div>
</template>
