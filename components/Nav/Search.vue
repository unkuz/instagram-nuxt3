<script lang="ts" setup>
import SearchIcon_ from '~~/assets/svg/search_icon.svg'
import SearchiconSelected_ from '~~/assets/svg/search_icon_selected.svg'
import IconBase from '~~/components/Nav/IconBase.vue'

interface IconProps {
  isSelect: boolean
}

const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <SearchIcon_ v-if="isSelect" />
    <SearchiconSelected_ v-else />
  </IconBase>
</template>
