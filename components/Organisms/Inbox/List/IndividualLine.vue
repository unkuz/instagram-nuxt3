<script setup lang="ts">
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'

interface IProps {
  profile_pic_url: string
  username: string
  preview_lastest_message: string
  created_at: string
  message_not_seen_count: number
}

defineProps<IProps>()
</script>
<template>
  <div>
    <NuxtLink to="/inbox/5723987">
      <div
        class="flex w-full cursor-pointer items-center justify-between rounded-2xl p-[10px] duration-1000 hover:bg-c22 dark:hover:bg-c20"
      >
        <div class="flex items-center gap-[10px]">
          <Avatar class="h-[60px] w-[60px]" :url="profile_pic_url" />
          <div class="flex flex-col gap-[5px]">
            <TagName name="cuzknothz" />
            <span class="text-c19 line-clamp-1 dark:text-c1">{{ preview_lastest_message }}</span>
          </div>
        </div>
        <div class="flex h-full flex-col items-end gap-[8px]">
          <div>
            <TimeFromNow class="text-[.75rem]" :time="created_at" />
          </div>
          <div>
            <div
              class="flex h-[22px] w-[22px] items-center justify-center rounded-[50%] bg-c14 text-[.7rem] font-[600]"
            >
              {{ message_not_seen_count }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
