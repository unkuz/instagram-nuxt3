<script lang="ts" setup>
import HomeIcon_ from '@@/assets/svg/home_icon.svg'
import HomeIconSelected_ from '@@/assets/svg/home_icon_selected.svg'
import IconBase from '@@/components/Nav/IconBase.vue'

interface IconProps {
  isSelect: boolean
}

const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <HomeIcon_ v-if="isSelect" />
    <HomeIconSelected_ v-else />
  </IconBase>
</template>
