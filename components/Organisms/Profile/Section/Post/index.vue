<script setup lang="ts">
import { useFeedUserStore } from '~/store'
import IndividualPost from './IndividualPost.vue'

const feedUserStore = useFeedUserStore()

const list = $computed(() => feedUserStore.data)
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualPost v-for="i in list" :key="i.id" :src="i?.carousel_media?.images?.[0]?.src" />
  </div>
</template>

