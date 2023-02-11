<script lang="ts" setup>
import HomeIcon_ from '@/assets/svg/home_icon.svg'
import HomeIconSelected_ from '@/assets/svg/home_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <HomeIcon_ v-if="isSelect" class="dark:fill-c1" />
    <HomeIconSelected_ v-else class="dark:fill-c1" />
  </IconBase>
</template>
