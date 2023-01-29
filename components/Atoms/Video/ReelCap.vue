<script setup lang="ts">
import { IUser } from '@@/models'
import { SizeAvatarEnum } from '@@/type'
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
  <div class="absolute bottom-[60px] left-[10px] right-[10px] duration-200 md:bottom-[50px]">
    <div class="flex items-center gap-[20px]">
      <Avatar :size="SizeAvatarEnum.S" :url="user.profile_pic_url" />
      <TagName :name="user.full_name" class="max-w-[150px] line-clamp-1" />
      <Button text="Follow" class="select-none bg-c9 px-[15px] py-[6px] text-[0.8rem] text-c1 duration-500" />
    </div>
    <p
      class="mt-[10px] whitespace-pre-line line-clamp-1 md:mt-[20px] [&>a]:text-c7 dark:[&>a]:text-c15"
      v-html="$urlify(caption)"
    />
  </div>
</template>
