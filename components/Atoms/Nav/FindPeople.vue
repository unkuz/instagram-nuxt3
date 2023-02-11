<script lang="ts" setup>
import ExploreIcon_ from '@/assets/svg/explore_icon.svg'
import ExploreIconSelected_ from '@/assets/svg/explore_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <ExploreIcon_ v-if="isSelect" class="dark:fill-c1" />
    <ExploreIconSelected_ v-else class="dark:fill-c1" />
  </IconBase>
</template>
