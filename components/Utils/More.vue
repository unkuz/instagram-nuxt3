<script lang="ts" setup>
import { useClickOutSide } from '@@/composables/useClickOutSide'
import { useMoreStore } from '@@/store'
import { gsap } from 'gsap'
import Avatar from '../Tiny/Avatar.vue'
import BackDrop from './BackDrop.vue'

const options = [
  { name: 'Block' },
  { name: 'Unfollow' },
  { name: 'Report' },
  { name: 'Ignore Friend Recomandation' },
  { name: 'Send Profile To...' },
]

const moreRef = ref<HTMLDivElement>(null)
const moreStore = useMoreStore()

onMounted(() => {
  gsap.to(moreRef.value, {
    bottom: 0,
    duration: 0.2,
  })
})

useClickOutSide(moreRef, () => {
  moreStore.setHidden()
})
</script>

<template>
  <div class="z-50">
    <BackDrop>
      <div
        class="fixed right-1/2 -bottom-[100%] z-20 w-[85%] translate-x-1/2 text-[0.8rem] sm:w-[400px]"
        ref="moreRef"
      >
        <div
          class="flex h-[60px] items-center justify-between rounded-[0.8rem] bg-white px-[20px] sm:px-[30px]"
        >
          <div class="flex items-center space-x-[20px]">
            <Avatar
              url="/personal/284244344_5311122635605193_5864440318105391567_n.jpg"
              className="w-[45px]"
            />
            <div>
              <p>Joe Biden</p>
              <p>View Profile</p>
            </div>
          </div>
          <div class="flex items-center space-x-[20px]">
            <div
              class="flex h-[30px] w-[90px] cursor-pointer items-center justify-center space-x-[5px] rounded-full bg-blue-500 sm:h-[35px] sm:w-[100px]"
            >
              <span>+</span>
              <span>Add</span>
            </div>
            <div>></div>
          </div>
        </div>
        <div class="mt-[10px] overflow-hidden rounded-[0.8rem] bg-white">
          <div
            v-for="(i, idx) in options"
            :key="idx"
            class="flex h-[60px] cursor-pointer items-center border-b-[1px] border-black/10 px-[30px] text-fuchsia-400 last:border-b-0 hover:bg-blue-300"
          >
            {{ i.name }}
          </div>
        </div>
        <div
          @click="moreStore.setHidden()"
          class="mt-[10px] flex h-[45px] cursor-pointer items-center justify-center rounded-[0.8rem] bg-white px-[30px] active:bg-blue-300 sm:h-[50px]"
        >
          Done
        </div>
      </div></BackDrop
    >
  </div>
</template>
