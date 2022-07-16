<script lang="ts" setup>
import HeartIcon_ from '~~/assets/svg/heart_icon.svg'
import MoreIcon_ from '~~/assets/svg/more_icon.svg'
import BackDrop from '~~/components/Utils/BackDrop.vue'
import { useLockScroll } from '~~/composables/useLockScroll'
import { useWindowResizeCallback } from '~~/composables/useWindowResizeCallback'
import { useMoreStore } from '~~/store/more'

const viewPostRef = ref(null)
const commentHeadingRef = ref(null)
const commentRef = ref(null)
const commentContainerRef = ref(null)
const router = useRouter()
const moreStore = useMoreStore()

useLockScroll()

useClickOutSide(viewPostRef, () => {
  router.back()
})

const calcHeightComment = () => {
  commentRef.value.style.height = `${
    commentContainerRef.value.clientHeight - commentHeadingRef.value.clientHeight
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
          <img
            src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div ref="commentContainerRef" class="h-full bg-white md:flex-1">
          <div ref="commentHeadingRef" class="h-[60px] border-b-[1px] border-gray-300">
            <div class="mx-[16px] flex h-full items-center justify-between">
              <div class="flex items-center space-x-[10px]">
                <div class="h-[40px] w-[40px] rounded-[50%] bg-black"></div>
                <p class="cursor-pointer">cuzknothz</p>
              </div>
              <div>
                <MoreIcon_ />
              </div>
            </div>
          </div>
          <div ref="commentRef" class="overflow-y-scroll p-[16px]">
            <div
              v-for="i in Array.from(Array(40).keys())"
              class="mb-[10px] flex w-full items-center justify-between"
            >
              <div class="flex">
                <div class="mr-[18px] aspect-square h-[40px] w-[40px] rounded-[50%] bg-black"></div>
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
                <HeartIcon_ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  </div>
</template>
