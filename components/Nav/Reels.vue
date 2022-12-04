<script lang="ts" setup>
import Reelicon_ from '@@/assets/svg/reel_icon.svg'
import IconBase from '@@/components/Nav/IconBase.vue'

interface IconProps {
  isSelect: boolean
}
defineProps<IconProps>()
</script>

<template>
  <IconBase> <Reelicon_  class="dark:fill-c1"/></IconBase>
</template>
