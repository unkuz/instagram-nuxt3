<script setup lang="ts">
import { IUser } from '@/models'
import { SizeAvatarEnum } from '@/type'
import Avatar from '../Avatar.vue'
import Button from '../Button.vue'
import TagName from '../TagName.vue'

interface IProps {
  user: IUser
  caption: string
}

defineProps<IProps>()
</script>
<template>
  <div class="absolute bottom-[15px] left-[15px] right-[100px] duration-200 md:bottom-[50px]">
    <div class="flex items-center gap-[20px]">
      <Avatar :size="SizeAvatarEnum.S" :url="user.profile_pic_url" />
      <TagName :name="user.full_name" class="max-w-[150px] !bg-c1 !text-c2 line-clamp-1" />
      <Button
        text="Follow"
        class="select-none !bg-c1/20 px-[15px] py-[6px] text-[0.8rem] text-c1 backdrop-blur-[5px] duration-500"
      />
    </div>
    <p
      class="mt-[10px] whitespace-pre-line text-c1 line-clamp-1 md:mt-[20px] [&>a]:text-c7 dark:[&>a]:text-c15"
      v-html="$urlify(caption)"
    />
  </div>
</template>
