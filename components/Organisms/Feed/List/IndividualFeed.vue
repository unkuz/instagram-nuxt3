<script lang="ts" setup>
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import { useForceRenderTimer } from '@/composables'
import { useFeedStore } from '@/store'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import IndividualComment from './IndividualComment.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'

const props = defineProps<{
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

const commentCount = $computed(() => {
  let i = props.feed.comments.length
  let j = 0

  props.feed.comments.forEach((k: any) => {
    j += k.reply.length
  })

  return i + j
})
</script>

<template>
  <article
    class="w-full border-b-[1px] border-c4 bg-transparent p-[1px] dark:border-c4/10 dark:md:bg-transparent [&:not(:last-child)]:mb-[0px]"
  >
    <Head :avatar="feed.user?.profile_pic_url" :user-name="feed.user.user_name" :feed="feed" />
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
      <LikeCommentCount :like-count="feed.like_count" :comment-count="commentCount" />
      <Caption
        :user-name="feed.user.user_name"
        :captionContent="feed.caption_text"
        :tags="feed.tags"
      />

      <TimeFromNow
        :time="feed.created_at"
        class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
      />

      <div ref="commentRef" class="mt-[15px] max-h-[300px] w-full overflow-scroll md:max-h-[500px]">
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
  </article>
</template>
