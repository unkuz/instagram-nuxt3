<script lang="ts" setup>
import NewPostIcon_ from '@/assets/svg/new_post_icon.svg'
import NewPostIconSelected_ from '@/assets/svg/new_post_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}
defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <NewPostIcon_ v-if="isSelect" class="dark:fill-c1" />
    <NewPostIconSelected_ v-else class="dark:fill-c1" />
  </IconBase>
</template>
