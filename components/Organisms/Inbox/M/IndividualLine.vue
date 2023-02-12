<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '~~/type'
interface IProps {
  isReply: boolean
  content?: string
}
withDefaults(defineProps<IProps>(), {
  isReply: false,
  content: '',
})
</script>
<template>
  <div
    :class="[
      'mb-[10px] flex items-end gap-[10px] last:mb-0',
      isReply ? 'justify-start' : 'justify-end',
    ]"
  >
    <Avatar
      :class="['w-[30px]', isReply ? 'opacity-100' : 'opacity-0']"
      url="/image/91480011.jpg"
    />

    <div
      :class="[
        'whitespace-pre-line  rounded-2xl p-[12px]',
        isReply ? 'bg-gray-200 dark:text-c2' : 'bg-blue-500 text-white',
      ]"
    >
      {{ content }}

      <slot name="special"></slot>
    </div>
  </div>
</template>
