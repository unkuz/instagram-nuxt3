<script lang="ts" setup>
import DirectIcon_ from '@@/assets/svg/direct_icon.svg'
import EmojiIcon_ from '@@/assets/svg/experiment.svg'
import ExperimentFilledIcon_ from '@@/assets/svg/experiment_filled.svg'
import Emoji from '@@/components/Utils/Emoji.vue'
import { useClickOutSide } from '@@/composables'
import { useAuthStore, usePostDetailStore } from '@@/store'
import { gsap, TimelineLite } from 'gsap'
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
        userName: authStore.userName,
        userImg: authStore.avatar,
        id: idGen
    })
    commentValueText.value = ''
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

        <textarea @keyup.enter="send" ref="textBoxRef" rows="1"
            class="m-auto my-[10px]  block w-[83%] cursor-text resize-none  rounded-[5px] border-[1px] border-gray-200 bg-transparent p-[5px] shadow-sm shadow-gray-200 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none lg:w-[88%]"
            v-model="commentValueText">
      {{ commentValueText }}
    </textarea>

        <div @click="send" class="aspect-square h-[20px] cursor-pointer active:fill-[#00aeff]">
            <DirectIcon_ />
        </div>
    </div>
</template>
