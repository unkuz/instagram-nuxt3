<script setup lang="ts">
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import Avatar from '@/components/Atoms/Avatar.vue'

interface IProps {
  profile_pic_url: string
  username: string
  preview_lastest_message: string
  created_at: string
  message_not_seen_count: number
}

defineProps<IProps>()

const goDetail = () => navigateTo('/inbox/5723987')
</script>
<template>
  <div
    @click="goDetail"
    class="flex w-full cursor-pointer items-center justify-between rounded-2xl p-[10px] duration-500 hover:bg-c22"
  >
    <div class="flex items-center gap-[10px]">
      <Avatar class="h-[60px] w-[60px]" :url="profile_pic_url" />
      <div class="flex h-[80%] flex-col">
        <span class="font-[600] line-clamp-1">{{ username }}</span>
        <span class="line-clamp-1">{{ preview_lastest_message }}</span>
      </div>
    </div>
    <div class="flex h-full flex-col items-end">
      <div>
        <TimeFromNow :time="created_at" />
      </div>
      <div>
        <div
          class="flex h-[22px] w-[22px] items-center justify-center rounded-[50%] bg-c12 text-[.7rem] font-[600]"
        >
          {{ message_not_seen_count }}
        </div>
      </div>
    </div>
  </div>
</template>
