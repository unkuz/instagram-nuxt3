<script lang="ts" setup>
import Emoji from '@/components/Utils/Emoji.vue'
import { useAuthStore, usePostDetailStore } from '@/store'
import { onClickOutside } from '@vueuse/core'
import { BASE_URL_API } from '@/apis'

interface IProps {
  id: number
}

const { id } = defineProps<IProps>()

const emojiRef = ref<HTMLDivElement>()
let isShowEmoji = $ref(false)
const textBoxRef = $ref<HTMLTextAreaElement | null>(null)
let commentValueText = $ref('')
const viewPostDetailStore = usePostDetailStore()
const authStore = useAuthStore()

const emojiAdd = (value: string) => (commentValueText += value)

onClickOutside(emojiRef, () => (isShowEmoji = false))

const toggleShowEmoji = () => (isShowEmoji = !isShowEmoji)

const send = () => {
  viewPostDetailStore.comment(id, {
    text: commentValueText,
    userName: authStore.data.user.user_name,
    userImg: authStore.data.user?.profile_pic_url,
    id: Math.random() * 10000,
  })
  commentValueText = ''
}
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <div ref="emojiRef" class="relative">
      <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
      <div class="cursor-pointer text-[0.8rem] font-[500]" @click="toggleShowEmoji">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="m9.5 7.5l-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Zm4.5-1v10m-4-9v10" />
            <path
              d="m16 7l1-5l1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1m-9 9l-1 5l-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
            />
          </g>
        </svg>
      </div>
    </div>
    <textarea
      ref="textBoxRef"
      v-model="commentValueText"
      rows="1"
      spellcheck="false"
      class="m-auto my-[10px] block h-[38px] w-[83%] cursor-text resize-none rounded-[5px] border-[1px] border-c4 bg-transparent p-[5px] shadow-sm shadow-c4 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none dark:border-c20 dark:shadow-none lg:w-[88%]"
      @keyup.enter="send"
    >
      {{ commentValueText }}
    </textarea>
    <div class="cursor-pointer text-[0.8rem] font-[500]" @click="send">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </g>
      </svg>
    </div>
  </div>
</template>
