<script setup lang="ts">
import PlayIcon_ from '@@/assets/svg/play_icon.svg'
import Avatar from '../Avatar.vue'
import { SizeAvatarEnum } from '@@/type'
import { IUser } from '@@/models'
import Button from '../Button.vue'

interface IProps {
  user: IUser
  caption: string
}

defineProps<IProps>()
</script>
<template>
  <div class="absolute bottom-[30px] left-[30px] duration-200">
    <div class="flex items-center gap-[10px]">
      <Avatar :size="SizeAvatarEnum.M" :url="user.profile_pic_url" />

      <span>{{ user.full_name }}</span>
      <Button text="Follow" class="select-none bg-c7 px-[15px] py-[6px] text-[0.8rem] text-c1 duration-500" />
    </div>
    <div><span>{{ caption }}</span></div>
  </div>
</template>
