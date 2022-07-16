<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import Reelicon_ from '~~/assets/svg/reel_icon.svg'
interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()
</script>

<template>
  <IconBase> <Reelicon_ /></IconBase>
</template>
