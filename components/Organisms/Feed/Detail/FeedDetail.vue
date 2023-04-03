<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useFeedStore } from '@/store'
import Head from '@/components/Organisms/Feed/List/Head.vue'
import Caption from '@/components/Organisms/Feed/List/Caption.vue'
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'
import React from '@/components/Organisms/Feed/List/React.vue'
import LikeCommentCount from '../List/LikeCommentCount.vue'
import IndividualComment from '../List/IndividualComment.vue'
import { useLockScroll } from '@/composables/useLockScroll'
import Carousel from '../List/Carousel.vue'
import { gsap, Elastic } from 'gsap'

const feedStore = useFeedStore()
const feed = $computed(() => feedStore.data[0])
const containerRef = $ref<HTMLDivElement>()
const tl = gsap.timeline({})

onMounted(() => {
  tl.to(containerRef!, {
    opacity: 0,
    translateY: '-200%',
    scale: 0,
    duration: 0,
  }).to(containerRef!, {
    opacity: 1,
    translateY: 0,
    scale: 1,
    duration: 0.3,
    ease: Elastic.easeOut.config(1, 0.6),
  })
})

const back = () => navigateTo('/')

const currentIdx = ref(0)

useLockScroll()

const setCurrent = (val) => (currentIdx.value = val)
</script>

<template>
  <div>
    <BackDrop @click.self="back">
      <div
        ref="containerRef"
        class="flex h-screen w-screen bg-c1 text-[.75rem] dark:bg-c2 md:h-[90vh] md:w-[80vw] md:flex-col md:text-[.8rem] xl:h-[80vh] xl:flex-row"
      >
        <div class="hidden flex-1 flex-col items-center justify-center bg-c2 md:flex">
          <Carousel
            :id="feed.id"
            :images="feed.carousel_media.images"
            :videos="feed.carousel_media.videos"
            :has-saved="feed.is_saved"
            :has-liked="feed.has_liked"
            @current-index-carousel="setCurrent($event)"
            :currentParent="currentIdx"
          />
        </div>
        <div class="relative flex h-full w-full flex-col px-[10px] md:w-full lg:w-[500px]">
          <div class="absolute left-0 right-0 top-0 z-10 bg-c1 px-[10px] dark:bg-c2">
            <Head :avatar="feed.user?.profile_pic_url" :user-name="feed.user.username" />
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
