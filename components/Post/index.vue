<script lang="ts" setup>
import IndividualComment from '@@/components/Post/IndividualComment.vue'
import { useForceRenderTimer } from '@@/composables'
import moment from 'moment'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'

export interface IProps {
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
  id: string
  is_seen: boolean
  like_count: number
  location: {
    short_name: string
  }
  user: {
    id: string
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
const commentRef = ref<HTMLDivElement | null>(null)
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
    <Head :avatar="user.profile_pic_url" :userName="user.username" />
    <Carousel
      :images="carousel_media.images"
      :videos="carousel_media.videos"
      :hasSaved="is_saved"
      @currentIndexCarousel="setCurrent($event)"
      :hasLiked="has_liked"
      :id="id"
    />
    <div class="px-[16px] text-xs md:text-sm">
      <React
        :currentIdx="currentIdx"
        :hasLiked="has_liked"
        :mediaArr="mediaArr"
        :id="id"
        :hasSaved="is_saved"
      />
      <LikeCommentCount
        :likeCount="like_count"
        :commentCount="comments.length"
        @scrollToComment="scrollToComment"
      />
      <Caption :userName="user.username" :captionContent="caption_text" :tags="tags" />
      <div class="m-[0px_0px_0px_0px] h-[18px] text-[0.8rem] text-c3 dark:text-c21" :key="key">
        {{ moment(created_at).fromNow() }}
      </div>
      <div class="mt-[5px] w-full" ref="commentRef">
        <IndividualComment v-for="(i, idx) in comments" :comment="i" :key="idx" />
      </div>
      <ClientOnly>
        <Comment :id="id" />
      </ClientOnly>
    </div>
  </article>
</template>
