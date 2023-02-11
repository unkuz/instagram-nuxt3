<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import Button from '@/components/Atoms/Button.vue'
import { APP_CONFIGS } from '@/configs'
import { useAuthStore, useSuggestionStore } from '@/store'
import { IPending, SizeAvatarEnum } from '@/type'
import { getCurrentYear } from '@/utils'
import Item from './Item.vue'
import SuggestionSkl from '@/components/Skeleton/Suggestion.vue'

defineProps<IPending>()

const sugestionStore = useSuggestionStore()
let timer: NodeJS.Timer
let timer2: NodeJS.Timer

let maxSuggestionPeopleFollow = $ref(APP_CONFIGS.MAX_SUGGESTION_PEOPLE_FOLLOW)
const suggestion = $computed(() => sugestionStore.data.slice(0, maxSuggestionPeopleFollow))
const authStore = useAuthStore()
const avatar = $computed(() => authStore.data.avatar)
const sugestionRef = $ref<HTMLDivElement>()

let isIntersecting = $ref(false)

const { M } = SizeAvatarEnum
const authorText = 'cuzknothz'

// onMounted(() => {
//   let observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         isIntersecting = entry.isIntersecting
//       })
//     },
//     {
//       threshold: 1,
//       rootMargin: '0px 0px -100px 0px',
//     }
//   )
//   observer.observe(sugestionRef!)
// })

// watchEffect(() => {
//   if (!isIntersecting) {
//     timer = setInterval(() => {
//       maxSuggestionPeopleFollow--
//     }, 0)
//     clearInterval(timer2)
//   } else {
//     timer2 = setInterval(() => {
//       maxSuggestionPeopleFollow++
//     }, 500)
//     clearInterval(timer2)
//     return clearInterval(timer)
//   }
// })

// onBeforeUnmount(() => {
//   clearInterval(timer)
//   clearInterval(timer2)
// })
</script>

<template>
  <div>
    <div ref="sugestionRef" v-if="!isPending">
      <div class="mt-[26px] mb-[22px] flex h-[56px] items-center justify-between">
        <Avatar :size="M" :url="avatar" />
        <div class="-ml-[70px]">
          <p class="cursor-pointer font-medium">cuzknothz</p>
          <p class="text-c3 dark:text-c21">cuzknothz</p>
        </div>
        <div @click="authStore.data.isLogin = false">
          <NuxtLink to="/login">
            <Button class="bg-c15 py-[6px] text-[.8rem] text-c1" text="Log out" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex h-[11px] items-center justify-between text-sm text-c3 dark:text-c21">
        <div>Suggestions for you</div>
        <NuxtLink to="/explore/people">
          <div class="cursor-pointer">See All</div>
        </NuxtLink>
      </div>
      <div class="mt-[8px] h-auto w-full">
        <Item
          v-for="{ name, avatar, id } in suggestion"
          :id="id"
          :key="id"
          :name="name"
          :avatar="avatar"
        />
      </div>
      <div class="mt-[10px] text-[0.85rem] text-c3 dark:text-c21" v-once>
        <div class="flex justify-center">
          <span
            v-for="(i, idx) of ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy Terms']"
            :key="idx"
            class="cursor-not-allowed after:content-['.'] last:after:content-['']"
            >{{ i }}</span
          >
        </div>
        <div class="mb-[13px] flex justify-center">
          <span
            v-for="(i, idx) of ['Location', 'Top accounts', 'Hashtags', 'Language']"
            :key="idx"
            class="cursor-not-allowed after:content-['.'] last:after:content-['']"
            >{{ i }}</span
          >
        </div>
      </div>

      <div class="flex select-none flex-col items-center gap-[5px] text-[0.8rem]">
        <div>
          © <span> {{ getCurrentYear() }}</span> Instagram clone by
        </div>
        <NuxtLink
          :to="APP_CONFIGS.GITHUB_AUTHOR_LINK"
          target="_blank"
          class="relative overflow-hidden"
        >
          <div
            class="cursor-pointer font-august text-[1.25rem] uppercase tracking-wider text-c2 drop-shadow-md dark:text-c1"
          >
            {{ authorText }}
          </div>
          <!-- <div
          class="absolute top-[6px] h-[4px] w-[35px] rotate-[60deg] animate-cuzknothz bg-c1 dark:bg-c19"
        ></div> -->
        </NuxtLink>
      </div>
    </div>
    <SuggestionSkl v-else />
  </div>
</template>
