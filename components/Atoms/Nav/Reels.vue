<script lang="ts" setup>
import ReelIcon_ from '@/assets/svg/reel_icon.svg'
import ReelIconSelected_ from '@/assets/svg/reel_icon_selected.svg'

import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}
defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <ReelIconSelected_ v-if="isSelect" :class="['dark:fill-c1']" />
    <ReelIcon_ v-else
  /></IconBase>
</template>
