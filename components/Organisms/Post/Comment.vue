<script lang="ts" setup>
import Emoji from '@/components/Utils/Emoji.vue'
import { useClickOutSide } from '@/composables'
import { useAuthStore, usePostDetailStore, useTimeLineStore } from '@/store'

interface IProps {
  id: string
  currentReplyCommentId: string
}

const props = defineProps<IProps>()
const emit = defineEmits(['rm-current-reply-comment-id'])

const emojiRef = ref<HTMLDivElement>()
let isShowEmoji = $ref(false)
const textBoxRef = $ref<HTMLTextAreaElement | null>(null)
let commentValueText = $ref('')
const viewPostDetailStore = usePostDetailStore()
const timeLineStore = useTimeLineStore()
const authStore = useAuthStore()

watch(
  () => props.currentReplyCommentId,
  (val) => {
    if (val) {
      const findNickNameCommentReply = timeLineStore.data
        .find(({ id }) => id === props.id)!
        .comments.find(({ id }) => id === val)!.user.username
      commentValueText = '@' + `${findNickNameCommentReply}` + ' '
      textBoxRef?.focus()
    }
  }
)

const emojiAdd = (value: string) => (commentValueText += value)

useClickOutSide(emojiRef, () => (isShowEmoji = false))

const toggleShowEmoji = () => (isShowEmoji = !isShowEmoji)

const send = async () => {
  await timeLineStore.comment(props.id, {
    text: commentValueText,
    userName: authStore.data.userName,
    userImg: authStore.data.avatar,
    id: Math.random() * 10000,
    commentReplyId: props.currentReplyCommentId,
  })
  if (props.currentReplyCommentId) {
    emit('rm-current-reply-comment-id')
  }
  commentValueText = ''
}
</script>

<template>
  <div class="flex w-full items-center justify-between">
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
      ref="textBoxRef"
      v-model="commentValueText"
      rows="1"
      spellcheck="false"
      class="m-auto my-[10px] block h-[38px] w-[83%] cursor-text resize-none rounded-[5px] border-[1px] border-c4 bg-transparent p-[5px] shadow-sm shadow-c4 placeholder:text-center placeholder:text-[0.8rem] focus:outline-none dark:border-c20 dark:shadow-none lg:w-[88%]"
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
