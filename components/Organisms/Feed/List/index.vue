<script lang="ts" setup>
import PostSkl from '@/components/Skeleton/Post.vue'
import { useForceRenderTimer } from '@/composables'
import { useFeedStore } from '@/store'
import { IPending } from '@/type'
import moment from 'moment'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import IndividualComment from './IndividualComment.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import FetchMoreObserver from '@/components/Utils/FetchMoreObserver.vue'
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
    <PostSkl v-else />
  </div>
</template>
