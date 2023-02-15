<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useFeedStore } from '~~/store'
import Head from '@/components/Organisms/Feed/List/Head.vue'
import Caption from '@/components/Organisms/Feed/List/Caption.vue'
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import React from '@/components/Organisms/Feed/List/React.vue'
import LikeCommentCount from '../List/LikeCommentCount.vue'
import IndividualComment from '../List/IndividualComment.vue'
import {useLockScroll} from '@/composables/useLockScroll'

const feedStore = useFeedStore()
const feed = $computed(() => feedStore.data[0])

const back = () => navigateTo('/')

const currentIdx = ref(0)

useLockScroll()

const setCurrent = (val) => (currentIdx.value = val)
</script>

<template>
  <div>
    <BackDrop @click.self="back">
      <div class="flex md:h-[80vh] h-screen w-screen md:w-[80vw] bg-c1 md:text-[.8rem] text-[.75rem]">
        <div class="flex-1 flex-col bg-red-200 hidden md:flex"></div>
        <div class="relative flex h-full md:!w-[500px] w-full flex-col px-[10px]">
          <div class="absolute top-0 left-0 right-0 bg-c1 px-[10px] z-10">
            <Head
              class=""
              :avatar="feed.user.profile_pic_url"
              :user-name="feed.user.username"
            />
            <React
              :id="feed.id"
              :current-idx="currentIdx"
              :has-liked="feed.has_liked"
              :media-arr="feed.carousel_media.images.concat(feed.carousel_media.videos)"
              :has-saved="feed.is_saved"
              @current-index-carousel="setCurrent($event)"
            />
            <LikeCommentCount :like-count="feed.like_count" :comment-count="feed.comments.length" />
          </div>

          <div class="overflow-scroll pt-[123px] scrollbar-hide">
            <Caption
              :user-name="feed.user.username"
              :caption-content="feed.caption_text"
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
                @reply="() => {}"
              />
            </div>
            <div ref="commentRef" class="mt-[15px] w-full">
              <IndividualComment
                v-for="(j, idx) in feed.comments"
                :key="idx"
                :comment="j"
                :postId="feed.id"
                @reply="() => {}"
              />
            </div>
            <div ref="commentRef" class="mt-[15px] w-full">
              <IndividualComment
                v-for="(j, idx) in feed.comments"
                :key="idx"
                :comment="j"
                :postId="feed.id"
                @reply="() => {}"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </BackDrop>
  </div>
</template>

<style></style>
