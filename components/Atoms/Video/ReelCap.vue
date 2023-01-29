<script setup lang="ts">
import { IUser } from '@@/models'
import { SizeAvatarEnum } from '@@/type'
import Avatar from '../Avatar.vue'
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
      <Avatar :size="SizeAvatarEnum.S" :url="user.profile_pic_url" />

      <span>{{ user.full_name }}</span>
      <Button text="Follow" class="select-none bg-c9 px-[15px] py-[6px] text-[0.8rem] text-c1 duration-500" />
    </div>
    <div><span>{{ caption }}</span></div>
  </div>
</template>
