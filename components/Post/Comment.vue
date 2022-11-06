<script lang="ts" setup>
import DirectIcon_ from '@@/assets/svg/direct_icon.svg'
import EmojiIcon_ from '@@/assets/svg/experiment.svg'
import ExperimentFilledIcon_ from '@@/assets/svg/experiment_filled.svg'
import Emoji from '@@/components/Utils/Emoji.vue'
import { useClickOutSide } from '@@/composables'

const emojiRef = ref<HTMLDivElement>()
const isShowEmoji = ref(false)
const textBoxRef = ref<HTMLTextAreaElement>()
const commentValueText = ref('')

const emojiAdd = (value: string) => {
    commentValueText.value += value
}

useClickOutSide(emojiRef, () => {
    isShowEmoji.value = false
})

const toggleShowEmoji = () => (isShowEmoji.value = !isShowEmoji.value)

const inputText = (e: any) => {
    e.preventDefault()
    commentValueText.value = e.target.innerText
}


</script>

<template>
    <div class="flex w-full items-center justify-between sm:mb-[5px]">
        <div class="relative" ref="emojiRef">
            <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
            <div @click="toggleShowEmoji" class="w-[26px] cursor-pointer">
                <EmojiIcon_ v-show="!isShowEmoji" class="w-[26px]" />
                <ExperimentFilledIcon_ v-show="isShowEmoji" class="w-[26px]" />
            </div>
        </div>

        <textarea ref="textBoxRef" rows="1"
            class="m-auto my-[10px]  block w-[83%] cursor-text resize-none  rounded-[5px] border-[1px] border-gray-200 bg-transparent p-[5px] shadow-sm shadow-gray-200 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none lg:w-[88%]"
            v-model="commentValueText">
      {{ commentValueText }}
    </textarea>

        <div class="aspect-square h-[20px] cursor-pointer active:fill-[#00aeff]">
            <DirectIcon_ />
        </div>
    </div>
</template>
