<script lang="ts" setup>
import Emoji from '@@/components/Utils/Emoji.vue'
import { useClickOutSide } from '@@/composables'
import { useAuthStore, usePostDetailStore } from '@@/store'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
  id: string
}

const { id } = defineProps<IProps>()

const emojiRef = ref<HTMLDivElement | null>(null)
const isShowEmoji = ref<boolean>(false)
const textBoxRef = ref<HTMLTextAreaElement | null>(null)
const commentValueText = ref<string>('')
const viewPostDetailStore = usePostDetailStore()
const authStore = useAuthStore()

const emojiAdd = (value: string) => {
  commentValueText.value += value
}

useClickOutSide(emojiRef, () => {
  isShowEmoji.value = false
})

const toggleShowEmoji = () => (isShowEmoji.value = !isShowEmoji.value)

const send = async () => {
  const idGen = uuidv4()
  await viewPostDetailStore.comment(id, {
    text: commentValueText.value,
    userName: authStore.data.userName,
    userImg: authStore.data.avatar,
    id: idGen,
  })
  commentValueText.value = ''
}
</script>

<template>
  <div class="flex w-full items-center justify-between sm:mb-[5px]">
    <div class="relative" ref="emojiRef">
      <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
      <div @click="toggleShowEmoji" class="cursor-pointer text-[0.8rem] font-[500]">
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
      @keyup.enter="send"
      ref="textBoxRef"
      rows="1"
      spellcheck="false"
      class="m-auto my-[10px] block h-[38px] w-[83%] cursor-text resize-none rounded-[5px] border-[1px] border-c4 bg-transparent p-[5px] shadow-sm shadow-c4 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none dark:border-c20 dark:shadow-none lg:w-[88%]"
      v-model="commentValueText"
    >
      {{ commentValueText }}
    </textarea>
    <div @click="send" class="cursor-pointer text-[0.8rem] font-[500]">
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
