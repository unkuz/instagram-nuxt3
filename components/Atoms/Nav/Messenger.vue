<script lang="ts" setup>
import MessageIcon_ from '@/assets/svg/message_icon.svg'
import MessageIconSelected_ from '@/assets/svg/message_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
  hasNew: boolean
}
defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <MessageIcon_ v-if="isSelect" class="dark:fill-c1" />
    <MessageIconSelected_ v-else class="dark:fill-c1" />
    <div
      v-show="hasNew"
      class="absolute -bottom-[1px] -right-[1px] flex h-[8px] w-[8px] animate-pulse rounded-[50%] bg-c12"
    />
  </IconBase>
</template>
