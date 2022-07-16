<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import MessageIcon_ from '~~/assets/svg/message_icon.svg'
import MessageIconSelected_ from '~~/assets/svg/message_icon_selected.svg'

interface IconProps {
  isSelect: boolean
}

const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <MessageIcon_ v-if="isSelect" />
    <MessageIconSelected_ v-else />
  </IconBase>
</template>
