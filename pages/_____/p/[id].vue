<script lang="ts" setup>
import HeartIcon_ from '~~/assets/svg/heart_icon.svg'
import MoreIcon_ from '~~/assets/svg/more_icon.svg'
import BackDrop from '~~/components/Utils/BackDrop.vue'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'
import { useMoreStore } from '~~/store/more'
import { useViewPostDetailStore } from '~~/store/viewPostDetail'
import { gsap } from 'gsap'

const viewPostRef = ref<HTMLElement>(null)
const commentHeadingRef = ref(null)
const commentRef = ref(null)
const commentContainerRef = ref(null)
const router = useRouter()
const moreStore = useMoreStore()
const viewPostDetailStore = useViewPostDetailStore()

interface TimeLine {
  created_at: number
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
}

const post = computed(() => viewPostDetailStore.post)
const hasErr = computed(() => viewPostDetailStore.hasErr)

watch(hasErr, () => {
  navigateTo('/errror/404')
})

useClickOutSide(viewPostRef, () => {
  router.back()
})

onBeforeMount(() => {
  const id = router.currentRoute.value.params.id
  viewPostDetailStore.setPostDetail(id as string)
})

const calcHeightComment = () => {
  commentRef.value.style.height = `${
    commentContainerRef.value.clientHeight - commentHeadingRef.value.clientHeight
  }px`
}

onMounted(() => {
  gsap.to(viewPostRef.value, {
    bottom: 0,
    duration: 0.2,
  })
})

useWindowResizeCallback(calcHeightComment)
</script>

<template>
  <div class="text-[0.8rem]">
    <BackDrop>
      <div v-if="!post"></div>
      <div
        v-else
        ref="viewPostRef"
        class="fixed -bottom-[100%] flex h-screen flex-col overflow-hidden md:h-[800px] md:w-full lg:flex-row xl:w-[1000px]"
      >
        <div class="md:block md:flex-1 lg:hidden">
          <img
            v-for="i in post.carousel_media.images"
            :src="i.src"
            alt=""
            class="h-full w-full object-cover object-center"
          />
          <video
            v-for="i in post.carousel_media.videos"
            :src="i.src"
            alt=""
            muted
            autoplay
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div ref="commentContainerRef" class="h-full bg-white md:flex-1">
          <div ref="commentHeadingRef" class="h-[60px] border-b-[1px] border-gray-300">
            <div class="mx-[16px] flex h-full items-center justify-between">
              <div class="flex items-center space-x-[10px]">
                <div class="h-[40px] w-[40px] overflow-hidden rounded-[50%] bg-black">
                  <img :src="post.user.profile_pic_url" />
                </div>
                <p class="cursor-pointer">{{ post.user.username }}</p>
              </div>
              <div>
                <MoreIcon_ />
              </div>
            </div>
          </div>
          <div ref="commentRef" class="overflow-y-scroll p-[16px]">
            <div
              v-for="i in post.comments"
              class="mb-[10px] flex w-full items-center justify-between"
            >
              <div class="flex">
                <div
                  class="mr-[18px] aspect-square h-[40px] w-[40px] min-w-[40px] cursor-pointer overflow-hidden rounded-[50%] bg-black"
                >
                  <img :src="i.user.profile_pic_url" class="" />
                </div>
                <div>
                  <div class="">
                    <span class="mr-[4px]">{{ i.user.username }}</span>
                    <span>
                      {{ i.text }}
                    </span>
                  </div>

                  <p class="mt-[5px] flex space-x-[12px]">
                    <span>6w</span>
                    <span class="cursor-pointer">Reply</span>
                  </p>
                </div>
              </div>
              <div class="cursor-pointer">
                <HeartIcon_ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
