<script lang="ts" setup>
import ArrowIcon_ from '~~/assets/svg/arrow_icon.svg'
import DirectIcon_ from '~~/assets/svg/direct_icon.svg'
import EmojiIcon_ from '~~/assets/svg/emoji_icon.svg'
import LikeIcon_ from '~~/assets/svg/like_icon.svg'
import MoreIcon_ from '~~/assets/svg/more_icon.svg'
import SaveIcon_ from '~~/assets/svg/save_icon.svg'
import ShareIcon_ from '~~/assets/svg/share_icon.svg'
import ViewPostIcon_ from '~~/assets/svg/view_post_icon.svg'
import { useCarousel } from '~~/composables/useCarousel'
import { useClickOutSide } from '~~/composables/useClickOutSide'
import { APP_ROUTES } from '~~/routes'
import { useMoreStore } from '~~/store/more'
import { useViewPostDetailStore } from '~~/store/viewPostDetail'
import Emoji from './Emoji.vue'

export interface IProps {
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

const props = defineProps<IProps>()
const emojiRef = ref(null)
const moreStore = useMoreStore()
const viewPostDetailStore = useViewPostDetailStore()

const router = useRouter()
const isShowEmoji = ref(false)
const commentValueText = ref('')
const containerMediaRef = ref<HTMLDivElement>(null)
const isShowMore = ref(false)

const { next, prev, current } = useCarousel(containerMediaRef)

const toggleShowEmoji = () => (isShowEmoji.value = !isShowEmoji.value)
const totalMedia = computed(
  () => props.carousel_media.images.concat(props.carousel_media.videos).length
)

const emojiAdd = (value) => {
  commentValueText.value += value
}

useClickOutSide(emojiRef, () => {
  isShowEmoji.value = false
})

const viewPost = () => {
  viewPostDetailStore.setPostDetail(props.id)
  navigateTo(`${APP_ROUTES._____}/p/${props.id}`)
}
const showMore = () => {
  moreStore.setShow()
}
</script>

<template>
  <article ref="postRef" class="mb-[24px] w-full border-gray-200 sm:border-[1px]">
    <div class="h-[60px]">
      <div class="mx-[16px] flex h-full items-center justify-between">
        <div class="flex items-center space-x-[10px] text-[0.8rem]">
          <div
            class="aspect-square h-[32px] w-[32px] cursor-pointer rounded-full border-[1px] border-gray-200"
          >
            <img class="rounded-full object-cover" :src="user.profile_pic_url" />
          </div>
          <div class="cursor-pointer">{{ user.username }}</div>
        </div>
        <div>
          <MoreIcon_ @click="showMore" />
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden">
      <div class="inline-flex duration-200" ref="containerMediaRef">
        <div
          v-if="carousel_media.images"
          v-for="i in carousel_media.images"
          :key="i.id"
          class="min-w-full"
        >
          <img class="min-h-full min-w-full cursor-pointer object-cover" :src="i.src" alt="" />
        </div>
        <div
          v-if="carousel_media.videos"
          class="min-w-full overflow-hidden"
          v-for="i in carousel_media.videos"
          :key="i.id"
        >
          <video :src="i.src" autoplay muted loop class="cursor-pointer" />
        </div>
      </div>
      <div
        class="absolute left-5 top-[50%] flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20"
        @click="prev"
      >
        <ArrowIcon_ class="h-[12px] w-[12px] rotate-180" />
      </div>

      <div
        class="absolute right-5 top-[50%] flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20"
        @click="next"
      >
        <ArrowIcon_ class="h-[12px] w-[12px]" />
      </div>
      <div
        class="absolute top-[20px] right-[20px] rounded-full bg-black/50 px-[8px] py-[2px] text-[0.8rem] text-white"
      >
        {{ `${current + 1}/${totalMedia}` }}
      </div>
    </div>

    <div class="px-[16px] text-xs md:text-sm">
      <div class="mt-[4px] h-[54px]">
        <div class="grid h-full grid-cols-3">
          <div class="flex h-full w-full items-center space-x-[10px]">
            <LikeIcon_ />
            <ViewPostIcon_ @click="viewPost" />
            <ShareIcon_ />
          </div>
          <div class="flex items-center justify-center space-x-[4px]">
            <div
              v-for="(i, idx) in carousel_media.images.concat(carousel_media.videos)"
              :class="`h-[6px] w-[6px]  rounded-[50%] bg-white ${
                current === idx ? 'bg-[#0c8aff]' : 'bg-[#535353]'
              }`"
            ></div>
          </div>
          <div class="flex h-full w-full items-center justify-end">
            <SaveIcon_ />
          </div>
        </div>
      </div>
      <div class="mb-[8px] h-[18px] cursor-pointer font-medium">{{ like_count }} likes</div>
      <div :class="`mb-[4px] ${isShowMore ? ' ' : 'h-[62px]'}`">
        <p :class="`overflow-hidden ${isShowMore ? ' ' : 'whitespace-nowrap'}`">
          <span class="font-medium">{{ user.username }}</span> {{ caption_text }}
        </p>
        <p v-if="!isShowMore" class="cursor-pointer text-gray-600" @click="isShowMore = true">
          ... more
        </p>
        <p class="cursor-pointer text-gray-600">View all {{ comments.length }} comments</p>
      </div>
      <div class="mb-[16px] h-[18px] text-gray-600">{{ created_at }} DAY AGO</div>
      <div class="flex h-[50px] items-center justify-between border-gray-200 md:border-t-[1px]">
        <div class="relative" ref="emojiRef">
          <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
          <EmojiIcon_ @click="toggleShowEmoji" />
        </div>
        <div class="w-full">
          <textarea
            placeholder="Add a comment…"
            v-model="commentValueText"
            class="m-auto block w-[85%] resize-none placeholder:text-center placeholder:text-[0.8rem] focus:outline-none md:w-[420px]"
          ></textarea>
        </div>
        <div class="h-[22px] w-[22px] cursor-pointer active:fill-[#00aeff]">
          <DirectIcon_ />
        </div>
      </div>
    </div>
  </article>
</template>
