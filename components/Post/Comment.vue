<script lang="ts" setup>
import DirectIcon_ from '@@/assets/svg/direct_icon.svg'
import EmojiIcon_ from '@@/assets/svg/experiment.svg'
import ExperimentFilledIcon_ from '@@/assets/svg/experiment_filled.svg'
import Emoji from '@@/components/Utils/Emoji.vue'
import { useClickOutSide } from '@@/composables'
import { useAuthStore, usePostDetailStore } from '@@/store'
import { gsap, TimelineLite } from 'gsap'
import { v4 as uuidv4 } from 'uuid'
import Button from '@@/components/Tiny/Button.vue';


interface IProps {
    id: string
}

const { id } = defineProps<IProps>()

const emojiRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
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
        id: idGen
    })
    commentValueText.value = ''
}

</script>

<template>
  <div class="w-[100%] mx-auto !h-[40px] bg-[#88888836] rounded-[10px] relative  m-[20px_0px_20px_0px]" @click="inputRef?.focus()">
    <input type="text" class="mx-auto h-full focus:outline-none bg-transparent absolute w-[85%] left-1/2 -translate-x-[236px]" ref="inputRef" v-model="commentValueText"/>
    <div class="absolute top-1/2 -translate-y-1/2 right-[10px] flex items-center gap-[5px]">
        <div ref="emojiRef">
            <span @click="toggleShowEmoji"><EmojiIcon_ class="w-[20px] cursor-pointer"/></span>
            <Emoji v-if="isShowEmoji" @emojiAdd="emojiAdd"/>
        </div>
        
        <span><DirectIcon_ class="w-[15px] cursor-pointer" @click="send"/></span>
    </div>
  </div>
</template>
