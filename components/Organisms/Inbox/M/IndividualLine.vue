<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '~~/type'
interface IProps {
  isReply: boolean
  content: any
}
withDefaults(defineProps<IProps>(), {
  isReply: false,
  content: '',
})
</script>
<template>

  <div :class="['mb-[10px] last:mb-0 flex gap-[10px] items-end', isReply ?'justify-start': 'justify-end' ]">


    <Avatar
      :class="['w-[30px]', isReply ? 'opacity-100' : 'opacity-0']"
      url="/image/91480011.jpg"
    />

    <div :class="['rounded-2xl  p-[12px] whitespace-pre-line', isReply ? 'bg-gray-200' : 'bg-blue-500 text-white']">
      {{ content }}
    </div>
  </div>
</template>
