<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import NewPostIcon_ from '~~/assets/svg/new_post_icon.svg'
import NewPostIconSelected_ from '~~/assets/svg/new_post_icon_selected.svg'

interface IconProps {
  isSelect: boolean
}
const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <NewPostIcon_ v-if="isSelect" />
    <NewPostIconSelected_ v-else />
  </IconBase>
</template>
