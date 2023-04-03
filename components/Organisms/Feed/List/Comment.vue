<script lang="ts" setup>
import Emoji from '@/components/Utils/Emoji.vue'
import { useAuthStore, useFeedStore } from '@/store'
import { onClickOutside, useTextareaAutosize } from '@vueuse/core'
import { BASE_URL_API } from '@/apis'

interface IProps {
  id: number
  currentReplyCommentId: number | string
}

const props = defineProps<IProps>()
const emit = defineEmits(['rm-current-reply-comment-id'])

const { textarea, input } = useTextareaAutosize()

const emojiRef = ref<HTMLDivElement>()
let isShowEmoji = $ref(false)
const timeLineStore = useFeedStore()
const authStore = useAuthStore()

watch(
  () => props.currentReplyCommentId,
  (val) => {
    if (val) {
      const findNickNameCommentReply = timeLineStore.data
        .find(({ id }: any) => id === props.id)!
        .comments.find(({ id }: any) => id === val)!.user.username
      input.value = '@' + `${findNickNameCommentReply}` + ' '
      textarea.value?.focus()
    }
  }
)

const emojiAdd = (value: string) => (input.value += value)

onClickOutside(emojiRef, () => (isShowEmoji = false))

const toggleShowEmoji = () => (isShowEmoji = !isShowEmoji)

const send = async () => {
  await timeLineStore.comment(props.id, {
    text: input.value,
    id: Math.random() * 10000,
    commentReplyId: props.currentReplyCommentId,
  })
  if (props.currentReplyCommentId) {
    emit('rm-current-reply-comment-id')
  }
  input.value = ''
}
</script>

<template>
  <div class="mb-[20px] flex w-full items-center justify-between gap-[10px]">
    <div ref="emojiRef" class="relative">
      <Emoji v-if="isShowEmoji" @emoji-add="emojiAdd" />
      <div class="cursor-pointer text-[0.8rem] font-[500]" @click="toggleShowEmoji">
        <svg width="28" height="28" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path
              d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 13.1a1 1 0 1 0-1.514 1.307C9.053 15.344 10.283 16 12 16c1.716 0 2.947-.656 3.757-1.593a1 1 0 0 0-1.514-1.307c-.419.485-1.091.9-2.243.9s-1.824-.415-2.243-.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"
            />
          </g>
        </svg>
      </div>
    </div>
    <textarea
      ref="textarea"
      v-model="input"
      rows="1"
      spellcheck="false"
      class="w-full resize-none rounded-[5px] bg-c4/50 px-[5px] py-[7px] placeholder:ml-[10px] focus:outline-none dark:bg-c23/50"
      @keyup.enter="send"
    />

    <div class="cursor-pointer text-[0.8rem] font-[500]" @click="send">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m6 12l-3 9l18-9L3 3l3 9zm0 0h6"
        />
      </svg>
    </div>
  </div>
</template>
