<script lang="ts" setup>
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import Stories from '~~/components/Stories/index.vue'
import { timeLine } from '~~/mocks/reelTimeLine'

definePageMeta({
  layout: 'main',
})
const rightRef = ref<HTMLElement>(null)

const positionRight = () => {
  rightRef.value.style.top = `${window.scrollY}px`
}

onMounted(() => {
  positionRight()
  addEventListener('scroll', positionRight)
})

onUnmounted(() => {
  removeEventListener('scroll', positionRight)
})
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories />
        <Post
          v-for="{
            caption_text,
            has_liked,
            carousel_media,
            comments,
            id,
            is_seen,
            like_count,
            location,
            created_at,
            user,
          } in timeLine"
          :key="id"
          :caption_text="caption_text"
          :has_liked="has_liked"
          :carousel_media="carousel_media"
          :comments="comments"
          :is_seen="is_seen"
          :id="id"
          :like_count="like_count"
          :location="location"
          :created_at="created_at"
          :user="user"
        />
      </div>
      <div
        class="absolute top-0 right-0 hidden h-[473px] w-[293px] bg-white text-sm lg:block"
        ref="rightRef"
      >
        <Suggestions />
      </div>
    </div>
    <NuxtChild />
  </div>
</template>
