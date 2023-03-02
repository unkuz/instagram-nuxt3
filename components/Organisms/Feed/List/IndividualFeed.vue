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

defineProps<{
  feed: any
}>()

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
  <article
    class="w-full bg-transparent p-[1px] md:bg-c4 md:clip-path-cuzknothz dark:md:bg-transparent [&:not(:last-child)]:mb-[24px]"
  >
    <div class="w-full bg-c1 dark:bg-c19 md:clip-path-cuzknothz">
      <Head :avatar="feed.user?.profile_pic_url" :user-name="feed.user.user_name" />
      <Carousel
        :id="feed.id"
        :images="feed.carousel_media.images"
        :videos="feed.carousel_media.videos"
        :has-saved="feed.is_saved"
        :has-liked="feed.has_liked"
        @current-index-carousel="setCurrent($event)"
        :currentParent="currentIdx"
      />
      <div class="px-[16px] text-xs md:text-sm">
        <React
          :id="feed.id"
          :current-idx="currentIdx"
          :has-liked="feed.has_liked"
          :media-arr="feed.carousel_media.images.concat(feed.carousel_media.videos)"
          :has-saved="feed.is_saved"
        />
        <LikeCommentCount :like-count="feed.like_count" :comment-count="feed.comments.length" />
        <Caption
          :user-name="feed.user.user_name"
          :captionContent="feed.caption_text"
          :tags="feed.tags"
        />

        <TimeFromNow
          :time="feed.created_at"
          class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
        />

        <div ref="commentRef" class="mt-[15px] w-full">
          <IndividualComment
            v-for="(j, idx) in feed.comments"
            :key="idx"
            :comment="j"
            :postId="feed.id"
            @reply="reply"
          />
        </div>
        <Comment
          :id="feed.id"
          @rm-current-reply-comment-id="currentReplyCommentId = ''"
          :currentReplyCommentId="currentReplyCommentId"
        />
      </div>
    </div>
  </article>
</template>
