<script lang="ts" setup>
import MessageIcon_ from '@@/assets/svg/message_icon.svg'
import MessageIconSelected_ from '@@/assets/svg/message_icon_selected.svg'
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
      class="absolute -bottom-[1px] -right-[1px] h-[7px] w-[7px] animate-pulse rounded-[50%] bg-red-600"
    />
  </IconBase>
</template>
