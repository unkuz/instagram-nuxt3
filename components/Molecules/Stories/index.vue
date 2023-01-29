<script lang="ts" setup>
import { IPending } from '~~/type'
import Stories from './Stories.vue'

defineProps<IPending>()
</script>

<template>
  <div>
    <Stories v-if="!isPending" />
    <div v-else>LODING</div>
  </div>
</template>
