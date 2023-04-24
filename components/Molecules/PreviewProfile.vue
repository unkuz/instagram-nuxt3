<script setup lang="ts">
import { fixSrc } from '@/utils'
import TagName from '../Atoms/TagName.vue'

interface IProps {
  user_name: string
  profile_pic_url: string
  cover_pic_url: string
  is_follow: boolean
}

defineProps<IProps>()
</script>

<template>
  <div class="w-[300px] overflow-hidden rounded-md bg-c1">
    <div class="aspect-[4/1] w-full"><AtomsNuxtImage :src="fixSrc(cover_pic_url)" /></div>
    <div class="flex items-end gap-[20px]">
      <AtomsAvatar
        :url="profile_pic_url"
        class="h-[50px] w-[50px] -translate-y-[20px] translate-x-[10px] border-[3px] border-c1"
      />
      <TagName :name="user_name" class="-translate-y-[20px]" />
    </div>
    <div class="flex w-full justify-end gap-[10px] px-[10px] pb-[10px]">
      <template>
        <AtomsButton text="Unfollow" v-if="is_follow" />
        <AtomsButton text="Follow" v-else />
      </template>
      <AtomsButton text="Inbox" />
    </div>
  </div>
</template>
