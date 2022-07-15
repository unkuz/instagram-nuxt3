<script lang="ts" setup>
import { useAuthStore } from '~~/store/auth'

interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()

const authStore = useAuthStore()
</script>

<template>
  <div class="select-none">
    <div
      :class="`rounded-full  p-[1px] ${isSelect ? 'bg-black' : 'bg-white'} sm:hover:cursor-pointer`"
    >
      <div class="rounded-full bg-white p-[1px]">
        <img
          crossorigin="anonymous"
          data-testid="user-avatar"
          draggable="false"
          class="h-[24px] w-[24px] rounded-full object-cover"
          :src="authStore.avatar"
        />
      </div>
    </div>
  </div>
</template>
