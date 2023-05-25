<script lang="ts" setup>
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useWindowResizeCallback, useLockScroll } from '@/composables'
import { onClickOutside } from '@vueuse/core'
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'

definePageMeta({
  middleware: 'auth',
})
const viewPostRef = $ref<HTMLDivElement>()
const commentHeadingRef = $ref<HTMLDivElement>()
const commentRef = $ref<HTMLDivElement>()
const commentContainerRef = $ref<HTMLDivElement>()
const router = useRouter()

useLockScroll()

onClickOutside(viewPostRef, () => {
  router.back()
})
const calcHeightComment = () => {
  commentRef!.style.height = `${
    commentContainerRef!.clientHeight - commentHeadingRef!.clientHeight
  }px`
}

useWindowResizeCallback(calcHeightComment)
</script>

<template>
  <div class="text-[0.8rem]">
    <BackDrop>
      <div
        ref="viewPostRef"
        class="flex h-screen overflow-hidden bg-fuchsia-300 duration-500 md:h-[800px] md:w-full xl:w-[1000px]"
      >
        <div class="hidden md:block md:flex-1">
          <NuxtImageCustom src="/personal/285912787_394288332653847_7603823348223049999_n.jpg" />
        </div>
        <div ref="commentContainerRef" class="h-full bg-white md:flex-1">
          <div ref="commentHeadingRef" class="h-[60px] border-b-[1px] border-gray-300">
            <div class="mx-[16px] flex h-full items-center justify-between">
              <div class="flex items-center space-x-[10px]">
                <div class="h-[40px] w-[40px] rounded-[50%] bg-black" />
                <p class="cursor-pointer">cuzknothz</p>
              </div>
              <div>
                <svg
                  aria-label="More Options"
                  class="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <div ref="commentRef" class="overflow-y-scroll p-[16px]">
            <div
              v-for="(_i, idx) in 40"
              :key="idx"
              class="mb-[10px] flex w-full items-center justify-between"
            >
              <div class="flex">
                <div class="mr-[18px] aspect-square h-[40px] w-[40px] rounded-[50%] bg-black" />
                <div>
                  <div class="">
                    <span class="mr-[4px]">cuzknothz</span>
                    <span>
                      น่ารัก​ครับ​น้องน่ารัก​ครับ​น้องน่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง
                      น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง
                      น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง
                      น่ารัก​ครับ​น้อง น่ารัก​ครับ​น้อง
                    </span>
                  </div>

                  <p class="mt-[5px] flex space-x-[12px]">
                    <span>6w</span>
                    <span class="cursor-pointer">Reply</span>
                  </p>
                </div>
              </div>
              <div class="cursor-pointer">
                <svg
                  aria-label="Like"
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path
                    d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
