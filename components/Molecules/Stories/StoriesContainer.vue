<script lang="ts" setup>
import { IPending } from '@/type'
import Stories from './Stories.vue'
import StorySkl from '@/components/Skeleton/Story/index.vue'

defineProps<IPending>()
</script>

<template>
  <div>
    <Stories v-if="!isPending" />
    <StorySkl v-else />
  </div>
</template>
