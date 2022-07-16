<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import HomeIcon_ from '~~/assets/svg/home_icon.svg'
import HomeIconSelected_ from '~~/assets/svg/home_icon_selected.svg'

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
