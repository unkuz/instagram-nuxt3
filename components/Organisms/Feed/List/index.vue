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
  <div>
    <ClientOnly>
      <template v-if="!isPending"
        ><article
          v-for="i in feeds"
          :key="i.id"
          ref="postRef"
          class="w-full bg-transparent p-[1px] md:bg-c4 md:clip-path-cuzknothz dark:md:bg-transparent [&:not(:last-child)]:mb-[24px]"
        >
          <div class="w-full bg-c1 dark:bg-c19 md:clip-path-cuzknothz">
            <Head :avatar="i.user.profile_pic_url" :user-name="i.user.user_name" />
            <Carousel
              :id="i.id"
              :images="i.carousel_media.images"
              :videos="i.carousel_media.videos"
              :has-saved="i.is_saved"
              :has-liked="i.has_liked"
              @current-index-carousel="setCurrent($event)"
              :currentParent="currentIdx"
            />
            <div class="px-[16px] text-xs md:text-sm">
              <React
                :id="i.id"
                :current-idx="currentIdx"
                :has-liked="i.has_liked"
                :media-arr="i.carousel_media.images.concat(i.carousel_media.videos)"
                :has-saved="i.is_saved"
                @current-index-carousel="setCurrent($event)"
              />
              <LikeCommentCount :like-count="i.like_count" :comment-count="i.comments.length" />
              <Caption
                :user-name="i.user.user_name"
                :captionContent="'sdfsdfdfkjsfksdjfkjsdkfjk'"
                :tags="i.tags"
              />

              <TimeFromNow
                :time="i.created_at"
                class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
              />

              <div ref="commentRef" class="mt-[15px] w-full">
                <IndividualComment
                  v-for="(j, idx) in i.comments"
                  :key="idx"
                  :comment="j"
                  :postId="i.id"
                  @reply="reply"
                />
              </div>
              <Comment
                :id="i.id"
                @rm-current-reply-comment-id="currentReplyCommentId = ''"
                :currentReplyCommentId="currentReplyCommentId"
              />
            </div>
          </div>
        </article>
        <FetchMoreObserver />
      </template>
      <PostSkl v-else />
    </ClientOnly>
  </div>
</template>
