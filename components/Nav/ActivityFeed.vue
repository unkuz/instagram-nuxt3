<script lang="ts" setup>
import ActivityFeedIcon_ from '~~/assets/svg/activity_feed_icon.svg'
import ActivityFeedIconSelected_ from '~~/assets/svg/activity_feed_icon_selected.svg'
import IconBase from '~~/components/Nav/IconBase.vue'

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
