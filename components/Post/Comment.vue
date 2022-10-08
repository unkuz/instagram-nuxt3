<script lang="ts" setup>
import DirectIcon_ from '~~/assets/svg/direct_icon.svg'
import EmojiIcon_ from '~~/assets/svg/emoji_icon.svg'
import Emoji from '~~/components/Utils/Emoji.vue'
import { useClickOutSide } from '~~/composables'

const emojiRef = ref(null)
const isShowEmoji = ref(false)
const commentValueText = ref('')

const emojiAdd = (value: string) => {
  commentValueText.value += value
}

useClickOutSide(emojiRef, () => {
  isShowEmoji.value = false
})

const toggleShowEmoji = () => (isShowEmoji.value = !isShowEmoji.value)
</script>

<template>
  <div class="flex min-h-[50px] items-center justify-between">
    <div class="relative" ref="emojiRef">
      <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
      <EmojiIcon_ @click="toggleShowEmoji" />
    </div>

    <div
      class="m-auto my-[10px] block min-h-[38px] w-[83%] resize-none rounded-md border-[1px] border-gray-200 bg-transparent p-[5px] placeholder:text-center placeholder:text-[0.8rem] focus:outline-none lg:w-[88%]"
      contentEditable
    >
      {{ commentValueText }}
    </div>

    <div class="h-[22px] w-[22px] cursor-pointer active:fill-[#00aeff]">
      <DirectIcon_ />
    </div>
  </div>
</template>
