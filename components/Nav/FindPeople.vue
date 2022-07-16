<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import ExploreIcon_ from '~~/assets/svg/explore_icon.svg'
import ExploreIconSelected_ from '~~/assets/svg/explore_icon_selected.svg'
interface IconProps {
  isSelect: boolean
}

const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <ExploreIcon_ v-if="isSelect" />
    <ExploreIconSelected_ v-else />
  </IconBase>
</template>
