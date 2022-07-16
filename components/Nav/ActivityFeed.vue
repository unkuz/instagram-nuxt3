<script lang="ts" setup>
import IconBase from '~~/components/Nav/IconBase.vue'
import ActivityFeedIcon_ from '~~/assets/svg/activity_feed_icon.svg'
import ActivityFeedIconSelected_ from '~~/assets/svg/activity_feed_icon_selected.svg'

interface IconProps {
  isSelect: boolean
}

const props = defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <ActivityFeedIcon_ v-if="isSelect" />
    <ActivityFeedIconSelected_ v-else />
  </IconBase>
</template>
