<script lang="ts" setup>
import ActivityFeedIcon_ from '@/assets/svg/activity_feed_icon.svg'
import ActivityFeedIconSelected_ from '@/assets/svg/activity_feed_icon_selected.svg'
import IconBase from './IconBase.vue'

interface IconProps {
  isSelect: boolean
}

defineProps<IconProps>()
</script>

<template>
  <IconBase>
    <ActivityFeedIcon_ v-if="isSelect" class="dark:fill-c1" />
    <ActivityFeedIconSelected_ v-else class="dark:fill-c1" />
  </IconBase>
</template>
