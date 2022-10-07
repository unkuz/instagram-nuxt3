<script lang="ts" setup>
import DirectIcon_ from '~~/assets/svg/direct_icon.svg'
import EmojiIcon_ from '~~/assets/svg/emoji_icon.svg'
import Emoji from '~~/components/Utils/Emoji.vue'
import { useClickOutSide } from '~~/composables/useClickOutSide'

const emojiRef = ref(null)
const isShowEmoji = ref(false)
const commentValueText = ref('')

const emojiAdd = (value) => {
  commentValueText.value += value
}

useClickOutSide(emojiRef, () => {
  isShowEmoji.value = false
})

const toggleShowEmoji = () => (isShowEmoji.value = !isShowEmoji.value)
</script>

<template>
  <div class="flex h-[50px] items-center justify-between border-gray-200 md:border-t-[1px]">
    <div class="relative" ref="emojiRef">
      <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
      <EmojiIcon_ @click="toggleShowEmoji" />
    </div>
    <div class="w-full">
      <textarea
        placeholder="Add a comment…"
        v-model="commentValueText"
        class="m-auto block w-[85%] resize-none bg-transparent placeholder:text-center placeholder:text-[0.8rem] focus:outline-none md:w-[420px]"
      ></textarea>
    </div>
    <div class="h-[22px] w-[22px] cursor-pointer active:fill-[#00aeff]">
      <DirectIcon_ />
    </div>
  </div>
</template>
