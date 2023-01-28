<script lang="ts" setup>
import ReelIcon_ from '@@/assets/svg/reel_icon.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}
defineProps<IconProps>()
</script>

<template>
  <IconBase> <ReelIcon_ :class="['dark:fill-c1']" /></IconBase>
</template>
