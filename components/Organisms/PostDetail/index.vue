<script lang="ts" setup>
import moment from 'moment'
import IndividualComment from './IndividualComment.vue'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'
import { useForceRenderTimer } from '@/composables'

interface IProps {
  created_at: string
  caption_text: string
  has_liked: boolean
  carousel_media: {
    images: {
      id?: number
      src?: string
    }[]
    videos: {
      id: number
      src: string
    }[]
  }
  comments: {
    text: string
    created_at: number
    user: {
      pk: number
      username: string
      full_name: string
      is_private: boolean
      profile_pic_url: string
    }
    comment_like_count: number
    reply: {
      text: string
      created_at: number
      user: {
        pk: number
        username: string
        full_name: string
        is_private: boolean
        profile_pic_url: string
      }
      comment_like_count: number
    }[]
  }[]
  id: number
  is_seen: boolean
  like_count: number
  location: {
    short_name: string
  }
  user: {
    id: number
    username: string
    full_name: string
    profile_pic_url: string
    friendship_status: {
      following: boolean
      outgoing_request: boolean
    }
  }
  tags: string[]
  is_saved: boolean
}

const props = defineProps<IProps>()
const isShowComment = ref<boolean>(true)
const commentRef = ref<HTMLDivElement>()
const currentIdx = ref<number>(0)
const setCurrent = (value: number) => (currentIdx.value = value)
const mediaArr = computed(() => props.carousel_media.images.concat(props.carousel_media.videos))

const { key } = useForceRenderTimer()

const scrollToComment = () => {
  isShowComment.value = true
}
</script>

<template>
  <article
    ref="postRef"
    class="mb-[24px] w-full border-c4 shadow-c4 dark:border-none dark:shadow-none md:border-[1px] md:shadow-sm"
  >
    <Head :avatar="user.profile_pic_url" :user-name="user.username" />
    <Carousel
      :id="id"
      :images="carousel_media.images"
      :videos="carousel_media.videos"
      :has-saved="is_saved"
      :has-liked="has_liked"
      @current-index-carousel="setCurrent($event)"
    />
    <div class="px-[16px] text-xs md:text-sm">
      <React
        :id="id"
        :current-idx="currentIdx"
        :has-liked="has_liked"
        :media-arr="mediaArr"
        :has-saved="is_saved"
      />
      <LikeCommentCount
        :like-count="like_count"
        :comment-count="comments.length"
        @scrollToComment="scrollToComment"
      />
      <Caption :user-name="user.username" :caption-content="caption_text" :tags="tags" />
      <div :key="key" class="m-[0px_0px_0px_0px] h-[18px] text-[0.8rem] text-c3 dark:text-c21">
        {{ moment(created_at).fromNow() }}
      </div>
      <div ref="commentRef" class="mt-[5px] w-full">
        <IndividualComment v-for="(i, idx) in comments" :key="idx" :comment="i" />
      </div>
      <Comment :id="id" />
    </div>
  </article>
</template>
