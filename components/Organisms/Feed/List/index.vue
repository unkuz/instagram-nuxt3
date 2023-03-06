<script lang="ts" setup>
import FeedSkeleton from '@/components/Skeleton/Feed/index.vue'
import FetchMoreObserver from '@/components/Utils/FetchMoreObserver.vue'
import { useForceRenderTimer } from '@/composables'
import { useFeedStore } from '@/store'
import { IPending } from '@/type'
import IndividualFeed from './IndividualFeed.vue'

defineProps<IPending>()

const feedStore = useFeedStore()
const feeds = $computed(() => feedStore.data)
const commentRef = $ref<HTMLDivElement>()
let currentReplyCommentId = ref<string | number>('')
const reply = (commentId: number) => (currentReplyCommentId.value = commentId)

let currentIdx = ref(0)
const setCurrent = (value: number) => (currentIdx.value = value)
const { key } = useForceRenderTimer()
</script>

<template>
  <div class="w-full">
    <template v-if="!isPending">
      <IndividualFeed v-for="i in feeds" :key="i.id" :feed="i" />
      <FetchMoreObserver />
    </template>
    <template v-else>
      <FeedSkeleton v-for="(i, idx) in 2" :key="idx" />
    </template>
  </div>
</template>
