<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { useForceRenderTimer } from '@/composables'
import { SizeAvatarEnum } from '@/type'
import moment from 'moment'

interface IProps {
  comment: any
  postId: number | string
}

defineProps<IProps>()

const { key } = useForceRenderTimer()
</script>

<template>
  <div :id="`post_detail_${comment.id}`" class="mb-[10px] md:text-[0.85rem]">
    <div class="relative my-[4px] rounded-md">
      <div class="mx-[10px] flex items-center gap-[10px]">
        <NuxtLink :to="`/${comment.user.user_name}`">
          <Avatar :url="comment.user?.profile_pic_url" :size="SizeAvatarEnum.S" />
        </NuxtLink>
        <div class="flex items-end gap-[10px]">
          <NuxtLink :to="`/${comment.user.user_name}`">
            <TagName :name="comment.user.user_name" />
          </NuxtLink>
          <AtomsTimeFromNow :time="comment.created_at" />
        </div>
      </div>
      <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
        <p>{{ comment.text }}</p>
        <div class="inline-flex gap-[20px] rounded py-[2px] text-[0.8rem]">
          <div class="flex items-end gap-[5px] font-[550]">
            <span class="cursor-pointer [&>svg]:fill-c2 dark:[&>svg]:fill-c1" title="Like">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M12.926 3.66a2.254 2.254 0 0 1 3.817 1.965l-.563 3.378A5 5 0 0 1 21 14v2a5 5 0 0 1-5 5H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1.586l5.34-5.34zM7 11H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v-8zm2 8h7a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-3a1 1 0 1 1 0-2h1.153l.617-3.704a.254.254 0 0 0-.43-.222L9 10.414V19z"
                  />
                </g>
              </svg>
            </span>
            <span class="align-bottom text-[0.9rem]">{{ comment.comment_like_count }}</span>
          </div>
          <div class="flex items-end gap-[5px]">
            <span
              class="cursor-pointer [&>svg]:fill-c2 dark:[&>svg]:fill-c1"
              title="Reply"
              @click="$emit('reply', comment.id)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M10.383 4.076A1 1 0 0 1 11 5v3.028c4.117.23 6.861 1.885 8.58 4.035C21.403 14.339 22 17.075 22 19a1 1 0 1 1-2 0c0-.502-.235-.942-.802-1.366c-.592-.443-1.477-.805-2.565-1.076c-1.804-.45-3.941-.594-5.633-.583V19a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.09-.217zm8.843 11.267a8.762 8.762 0 0 0-1.207-2.03C16.574 11.505 14.122 10 10 10a1 1 0 0 1-1-1V7.414L4.414 12L9 16.586V15a1 1 0 0 1 .955-.999c1.888-.086 4.743.014 7.162.616a11.6 11.6 0 0 1 2.11.726z"
                  />
                </g>
              </svg>
            </span>
            <span class="align-bottom text-[0.9rem]">{{ '0' }}</span>
          </div>
        </div>
      </div>
      <div class="absolute left-0 top-0 h-[85%] w-[3px] -translate-x-[0px] bg-c14" />
    </div>
    <div
      v-for="({ user, created_at, text, comment_like_count }, idx) in comment.reply"
      :key="idx"
      class="relative my-[4px] ml-[42px] rounded-md"
    >
      <div class="mx-[10px] flex items-center gap-[10px]">
        <NuxtLink :to="`/${user.user_name}`">
          <Avatar :url="user.profile_pic_url" :size="SizeAvatarEnum.S" />
        </NuxtLink>
        <NuxtLink :to="`/${user.user_name}`">
          <TagName :name="comment.user.user_name" />
        </NuxtLink>
        <AtomsTimeFromNow :time="created_at" />
      </div>
      <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
        <p>{{ text }}</p>
        <div class="flex gap-[20px] text-[0.8rem]">
          <div class="flex items-end gap-[5px] font-[550]">
            <span class="align-bottom text-[0.9rem]/[1.05rem]">{{ comment_like_count }}</span>
            <span class="cursor-pointer [&>svg]:fill-c2 dark:[&>svg]:fill-c1" title="Like">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M12.926 3.66a2.254 2.254 0 0 1 3.817 1.965l-.563 3.378A5 5 0 0 1 21 14v2a5 5 0 0 1-5 5H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1.586l5.34-5.34zM7 11H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v-8zm2 8h7a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-3a1 1 0 1 1 0-2h1.153l.617-3.704a.254.254 0 0 0-.43-.222L9 10.414V19z"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div class="flex items-end gap-[5px]">
            <span class="align-bottom text-[0.9rem]/[1.05rem]">{{ '0' }}</span>
            <span
              class="cursor-pointer [&>svg]:fill-c2 dark:[&>svg]:fill-c1"
              title="Reply"
              @click="$emit('reply', comment.id)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M10.383 4.076A1 1 0 0 1 11 5v3.028c4.117.23 6.861 1.885 8.58 4.035C21.403 14.339 22 17.075 22 19a1 1 0 1 1-2 0c0-.502-.235-.942-.802-1.366c-.592-.443-1.477-.805-2.565-1.076c-1.804-.45-3.941-.594-5.633-.583V19a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.09-.217zm8.843 11.267a8.762 8.762 0 0 0-1.207-2.03C16.574 11.505 14.122 10 10 10a1 1 0 0 1-1-1V7.414L4.414 12L9 16.586V15a1 1 0 0 1 .955-.999c1.888-.086 4.743.014 7.162.616a11.6 11.6 0 0 1 2.11.726z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="absolute left-0 top-0 h-[85%] w-[3px] -translate-x-[0px] bg-c12" />
    </div>
  </div>
</template>
