<script lang="ts" setup>
import SearchIcon_ from '@/assets/svg/search_icon.svg'
import SearchiconSelected_ from '@/assets/svg/search_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <SearchIcon_ v-if="isSelect" class="dark:fill-c1" />
    <SearchiconSelected_ v-else class="dark:fill-c1" />
  </IconBase>
</template>
