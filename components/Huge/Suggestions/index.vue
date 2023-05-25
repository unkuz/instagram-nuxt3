<script lang="ts" setup>
import Avatar from '@/components/Atoms/Avatar.vue'
import Button from '@/components/Atoms/Button.vue'
import { APP_CONFIGS } from '@/configs'
import { useAuthStore, useSuggestionStore } from '@/store'
import { IPending, SizeAvatarEnum } from '@/type'
import { getCurrentYear } from '@/utils'
import Item from './Item.vue'
import SuggestionSkl from '@/components/Skeleton/Suggestion.vue'
import { BASE_URL_API } from '@/apis'
import TagName from '@/components/Atoms/TagName.vue'
import SuggestionSkeleton from '@/components/Skeleton/Suggestion/index.vue'

defineProps<IPending>()

const sugestionStore = useSuggestionStore()
let timer: NodeJS.Timer
let timer2: NodeJS.Timer

let maxSuggestionPeopleFollow = $ref(APP_CONFIGS.MAX_SUGGESTION_PEOPLE_FOLLOW)
const suggestion = $computed(() => sugestionStore.data.slice(0, maxSuggestionPeopleFollow))
const authStore = useAuthStore()
const avatar = $computed(() => authStore.data.user?.profile_pic_url)
const sugestionRef = $ref<HTMLDivElement>()

let isIntersecting = $ref(false)

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
const userName = $computed(() => authStore.data.user?.user_name)

const logout = () => {
  authStore.logout()
}
</script>

<template>
  <div>
    <SuggestionSkeleton v-if="isPending" />
    <div ref="sugestionRef" v-else>
      <div class="mb-[22px] mt-[26px] flex h-[56px] items-center justify-between">
        <NuxtLink :to="`/${userName}/`"><Avatar :size="SizeAvatarEnum.M" :url="avatar" /></NuxtLink>

        <div class="-ml-[70px]">
          <NuxtLink :to="`/${userName}/`"> <TagName :name="userName" /></NuxtLink>
          <NuxtLink :to="`/${userName}/`"
            ><p class="text-c3 dark:text-c21">{{ userName }}</p></NuxtLink
          >
        </div>
        <div @click="logout">
          <NuxtLink to="/auth">
            <Button class="!bg-c15 py-[6px] text-[.8rem] text-c1" text="Log out" />
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
          v-for="{ user_name, profile_pic_url, id, is_follow } in suggestion"
          :id="id"
          :key="id"
          :user_name="user_name"
          :avatar="profile_pic_url"
          :isFollowing="is_follow"
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
            {{ APP_CONFIGS.AUTHOR }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
