<script setup lang="ts">
import { fixSrc } from '@/utils'
import { useSavedUserStore } from '@/store'
import IndividualPost from '@/components/Organisms/Explore/Square.vue'

const savedUserStore = useSavedUserStore()

savedUserStore.fetch()

const list = $computed(() => savedUserStore.data)
onUnmounted(() => savedUserStore.$reset())
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualPost
      v-for="i in list"
      :key="i.id"
      :src="fixSrc(i?.carousel_media?.images?.[0]?.src ?? i?.carousel_media?.videos?.[0]?.src)"
      :comments="i.comments.length"
      :likes="i.likes.length"
    />
  </div>
</template>
