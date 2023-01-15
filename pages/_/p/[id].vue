<script setup lang="ts">
import Caption from '@@/components/Organisms/Post/Caption.vue'
import Carousel from '@@/components/Organisms/Post/Carousel.vue'
import Comment from '@@/components/Organisms/Post/Comment.vue'
import Head from '@@/components/Organisms/Post/Head.vue'
import IndividualComment from '@@/components/Organisms/Post/IndividualComment.vue'
import LikeCommentCount from '@@/components/Organisms/Post/LikeCommentCount.vue'
import React from '@@/components/Organisms/Post/React.vue'
import BackDrop from '@@/components/Utils/BackDrop.vue'
import { useClickOutSide, useLockScroll } from '@@/composables'
import { usePostDetailStore } from '@@/store'
import { gsap } from 'gsap'
import moment from 'moment'
import { ITimeLine } from '~~/models'

useLockScroll()

onMounted(() => {
  gsap.to(postRef.value, {
    translateY: 0,
    duration: 0.3,
    opacity: 1,
    scale: 1,
  })
})

const postRef = ref<HTMLDivElement | null>(null)
const rightSectionRef = ref<HTMLDivElement | null>(null)
const route = useRoute()
const router = useRouter()
const postDetailStore = usePostDetailStore()
const currentIdx = ref<number>(0)

const { data: _timeline } = await useFetch<ITimeLine[]>(
  'https://mocki.io/v1/bbd9ad8d-fbd8-4d95-a9ac-ee6416513aae'
)

postDetailStore.setPostDetail(route.params.id as string)

const profilePicUrl = computed<string>(() => postDetailStore.post.user.profile_pic_url)
const images = computed<
  {
    id: string
    src: string
  }[]
>(() => postDetailStore.post.carousel_media.images)
const userName = computed<string>(() => postDetailStore.post.user.username)
const videos = computed<
  {
    id: string
    src: string
  }[]
>(() => postDetailStore.post.carousel_media.videos)
const hasLiked = computed<boolean>(() => postDetailStore.post.has_liked)
const id = computed<string>(() => postDetailStore.post.id)
const likeCount = computed<number>(() => postDetailStore.post.like_count)
const createdAt = computed<string>(() => postDetailStore.post.created_at)
const commentCount = computed(() => postDetailStore.post.comments.length)
const captiontext = computed<string>(() => postDetailStore.post.caption_text)
const tags = computed<string[]>(() => postDetailStore.post.tags)
const comments = computed(() => postDetailStore.post.comments)
const hasComment = computed<boolean>(() => postDetailStore.post.comments.length > 0)
const isSaved = computed<boolean>(() => postDetailStore.post.is_saved)

const setCurrent = (value: number) => (currentIdx.value = value)

useClickOutSide(postRef, () => {
  router.back()
}) 

onMounted(() => {
  const topH = rightSectionRef.value?.children[0].children[0].clientHeight!
  const bottomH = rightSectionRef.value?.children[1].clientHeight!

  Object.assign((rightSectionRef.value?.children[0].children[1] as HTMLDivElement).style, {
    height: `${535 - topH - bottomH}px`,
  })
})

const mediaArr = computed<
  {
    id: string
    src: string
  }[]
>(() =>
  postDetailStore.post.carousel_media.images.concat(postDetailStore.post.carousel_media.videos)
)
</script>

<template>
  <div>
    <BackDrop>
      <div
        class="flex h-[100vh] translate-y-[100vh] scale-0 flex-col overflow-scroll bg-c1 opacity-0 dark:bg-c19 md:h-[80vh] xl:h-[80%] xl:w-[80%] xl:flex-row xl:overflow-auto"
        ref="postRef"
      >
        <div class="flex w-full cursor-pointer justify-end md:hidden" @click="router.back">X</div>
        <div class="w-full md:h-full md:w-[80vw] xl:w-[700px]">
          <article
            class="w-full border-c4 shadow-c4 dark:border-none dark:shadow-none md:border-[1px] md:shadow-sm"
          >
            <Head :avatar="profilePicUrl" :userName="userName" />
            <Carousel
              :images="images"
              :videos="videos"
              @currentIndexCarousel="setCurrent($event)"
              :hasLiked="hasLiked"
              :id="id"
              :hasSaved="isSaved"
            />
            <div class="px-[16px] text-xs md:text-sm">
              <React
                :currentIdx="currentIdx"
                :hasLiked="hasLiked"
                :mediaArr="mediaArr"
                :id="id"
                :hasSaved="isSaved"
              />
              <LikeCommentCount :likeCount="likeCount" :commentCount="commentCount" />
              <div class="m-[8px_0px_5px_0px] h-[18px] text-[0.8rem] text-c3">
                {{ moment(createdAt).fromNow() }}
              </div>
            </div>
          </article>
        </div>
        <div
          class="flex w-full flex-col justify-between p-[15px_15px_0px_15px] text-[0.85rem] md:h-full md:w-[80vw] xl:w-[500px]"
          ref="rightSectionRef"
        >
          <div>
            <div>
              <Caption :userName="userName" :captionContent="captiontext" :tags="tags" />
            </div>
            <div
              :class="[
                'w-full overflow-y-scroll py-[10px] overflow-x-hidden',
                {
                  'flex items-center justify-center': !hasComment,
                },
              ]"
            >
              <template v-if="hasComment">
                <IndividualComment v-for="(i, idx) in comments" :comment="i" :key="idx" />
              </template>
              <template v-else>
                <div>No comment to show !!</div>
              </template>
            </div>
          </div>
          <ClientOnly>
            <Comment :id="id" />
          </ClientOnly>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
