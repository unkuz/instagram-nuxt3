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
      <div
        @click="toggleShowEmoji"
        class="cursor-pointer text-[0.8rem] font-[500] text-[#00aeff] active:text-[#8bff48]"
      >
        Emoji
      </div>
    </div>
    <textarea
      @keyup.enter="send"
      ref="textBoxRef"
      rows="1"
      spellcheck="false"
      class="m-auto my-[10px] block h-[38px] w-[83%] cursor-text resize-none rounded-[5px] border-[1px] border-gray-200 bg-transparent p-[5px] shadow-sm shadow-gray-200 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none lg:w-[88%]"
      v-model="commentValueText"
    >
      {{ commentValueText }}
    </textarea>
    <div
      @click="send"
      class="cursor-pointer text-[0.8rem] font-[500] text-[#00aeff] active:text-[#8bff48]"
    >
      Send
    </div>
  </div>
</template>
