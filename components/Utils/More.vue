<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import { useLockScroll } from '@/composables'
import { useMoreStore } from '@/store'
import { onClickOutside } from '@vueuse/core'
import { gsap } from 'gsap'
import BackDrop from './BackDrop.vue'

const options = [
  { name: 'Block' },
  { name: 'Unfollow' },
  { name: 'Report' },
  { name: 'Ignore Friend Recomandation' },
  { name: 'Send Profile To...' },
]

const moreRef = ref<HTMLDivElement>()
const moreStore = useMoreStore()
useLockScroll()

onMounted(() => {
  gsap.to(moreRef.value!, {
    bottom: 0,
    duration: 0.2,
  })
})

onClickOutside(moreRef, () => {
  moreStore.setHidden()
})
</script>

<template>
  <div class="z-50">
    <BackDrop>
      <div
        ref="moreRef"
        class="fixed right-1/2 -bottom-[100%] z-20 w-[85%] translate-x-1/2 text-[0.8rem] sm:w-[400px]"
      >
        <div
          class="flex h-[60px] items-center justify-between rounded-[0.8rem] bg-c1 px-[20px] sm:px-[30px]"
        >
          <div class="flex items-center space-x-[20px]">
            <Avatar
              url="/personal/284244344_5311122635605193_5864440318105391567_n.jpg"
              class="w-[45px]"
            />
            <div>
              <p>Joe Biden</p>
              <p>View Profile</p>
            </div>
          </div>
          <div class="flex items-center space-x-[20px]">
            <div
              class="flex h-[30px] w-[90px] cursor-pointer items-center justify-center space-x-[5px] rounded-full bg-c7 sm:h-[35px] sm:w-[100px]"
            >
              <span>+</span>
              <span>Add</span>
            </div>
            <div>></div>
          </div>
        </div>
        <div class="mt-[10px] overflow-hidden rounded-[0.8rem] bg-c1">
          <div
            v-for="(i, idx) in options"
            :key="idx"
            class="hover:c18 flex h-[60px] cursor-pointer items-center border-b-[1px] border-black/10 px-[30px] text-fuchsia-400 last:border-b-0"
          >
            {{ i.name }}
          </div>
        </div>
        <div
          class="mt-[10px] flex h-[45px] cursor-pointer items-center justify-center rounded-[0.8rem] bg-white px-[30px] active:bg-blue-300 sm:h-[50px]"
          @click="moreStore.setHidden()"
        >
          Done
        </div>
      </div>
    </BackDrop>
  </div>
</template>
