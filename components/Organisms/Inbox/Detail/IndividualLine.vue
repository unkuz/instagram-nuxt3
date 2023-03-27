<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '@/type'

interface IProps {
  isReply: boolean
  content?: string
  sequent?: boolean
}

withDefaults(defineProps<IProps>(), {
  isReply: false,
  content: '',
  sequent: false,
})
</script>
<template>
  <div
    :class="[
      'mb-[10px] flex items-end gap-[10px] last:mb-0 ',
      isReply ? 'justify-start' : 'justify-end',
      sequent && isReply && '',
      sequent && !isReply && '',
    ]"
  >
    <Avatar
      :class="['w-[30px]', isReply ? 'opacity-100' : ' opacity-0']"
      url="/image/91480011.jpg"
    />

    <div
      :class="[
        'whitespace-pre-line rounded-2xl p-[8px_10px_8px_10px]',
        isReply ? ' bg-c11 dark:text-c2' : ' bg-c17 text-white',
        !sequent && 'rounded-2xl',
      ]"
    >
      {{ content }}

      <slot name="special" />
      <slot name="text" />
      <slot name="image" />
      <slot name="video" />
    </div>
  </div>
</template>
