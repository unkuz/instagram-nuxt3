<script lang="ts" setup>
import { useForceRenderTimer } from '@@/composables'
import moment from 'moment'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import IndividualComment from './IndividualComment.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'
import { useTimeLineStore } from '~~/store'
import { IPending } from '~~/type'

defineProps<IPending>()

const timeLineStore = useTimeLineStore()
const timeline = $computed(() => timeLineStore.data)
const commentRef = $ref<HTMLDivElement | null>(null)
let currentReplyCommentId = ref('')
const reply = (commentId: string) => (currentReplyCommentId.value = commentId)

let currentIdx = $ref(0)
const setCurrent = (value: number) => (currentIdx = value)
const { key } = useForceRenderTimer()
</script>

<template>
  <div>
    <template v-if="!isPending"
      ><article
        v-for="i in timeline"
        :key="i.id"
        ref="postRef"
        class="w-full bg-transparent p-[1px] md:bg-c4 md:clip-path-cuzknothz dark:md:bg-transparent [&:not(:last-child)]:mb-[24px]"
      >
        <div class="w-full bg-c1 dark:bg-c19 md:clip-path-cuzknothz">
          <Head :avatar="i.user.profile_pic_url" :user-name="i.user.username" />
          <Carousel
            :id="i.id"
            :images="i.carousel_media.images"
            :videos="i.carousel_media.videos"
            :has-saved="i.is_saved"
            :has-liked="i.has_liked"
            @current-index-carousel="setCurrent($event)"
          />
          <div class="px-[16px] text-xs md:text-sm">
            <React
              :id="i.id"
              :current-idx="currentIdx"
              :has-liked="i.has_liked"
              :media-arr="i.carousel_media.images.concat(i.carousel_media.videos)"
              :has-saved="i.is_saved"
            />
            <LikeCommentCount :like-count="i.like_count" :comment-count="i.comments.length" />
            <Caption :user-name="i.user.username" :caption-content="i.caption_text" :tags="i.tags" />
            <div :key="key" class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]">
              {{ moment(i.created_at).fromNow() }}
            </div>
            <div ref="commentRef" class="mt-[15px] w-full">
              <IndividualComment v-for="(j, idx) in i.comments" :key="idx" :comment="j" :postId="i.id" @reply="reply" />
            </div>
            <Comment
              :id="i.id"
              @rm-current-reply-comment-id="currentReplyCommentId = ''"
              :currentReplyCommentId="currentReplyCommentId"
            />
          </div>
        </div></article
    ></template>
    <div v-else>HEHE</div>
  </div>
</template>
