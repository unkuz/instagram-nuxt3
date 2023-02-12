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
        'whitespace-pre-line p-[8px_10px_8px_10px]',
        isReply ? 'rounded-r-2xl bg-gray-200 dark:text-c2' : 'rounded-l-2xl bg-blue-500 text-white',
        sequent && isReply && 'rounded-tl-2xl',
        sequent && !isReply && 'rounded-tr-2xl',
        !sequent && 'rounded-2xl',
      ]"
    >
      {{ content }}

      <slot name="special" />
    </div>
  </div>
</template>
