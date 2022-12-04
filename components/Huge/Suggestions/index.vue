<script lang="ts" setup>
import Avatar from '@@/components/Atom/Avatar.vue'
import { TSuggestion } from '@@/models'
import { useAuthStore } from '@@/store'
import { SizeAvatarEnum } from '@@/type'
import Item from './Item.vue'
import Button from '@@/components/Atom/Button.vue'

interface IProps {
  suggestion: TSuggestion[]
}

defineProps<IProps>()

const authStore = useAuthStore()
const avatar = computed(() => authStore.data.avatar)

const { M } = SizeAvatarEnum
const authorText = 'cuzknothz'
</script>

<template>
  <div class="select-none" draggable="false">
    <div class="mt-[18px] mb-[22px] flex h-[56px] items-center justify-between">
      <Avatar :size="M" :url="avatar" />
      <div class="-ml-[70px]">
        <p class="cursor-pointer font-medium">cuzknothz</p>
        <p class="text-c3 dark:text-c21">cuzknothz</p>
      </div>
      <NuxtLink to="/login">
        <Button class="bg-c8 text-[.8rem] [&>span]:text-c9" text="Log out" />
      </NuxtLink>
    </div>
    <div class="flex h-[11px] items-center justify-between text-sm text-c3 dark:text-c21">
      <div>Suggestions for you</div>
      <NuxtLink to="/explore/people">
        <div class="cursor-pointer">See All</div>
      </NuxtLink>
    </div>
    <div class="mt-[8px] w-full">
      <Item
        v-for="{ name, avatar, id } in suggestion"
        :key="id"
        :name="name"
        :avatar="avatar"
        :id="id"
      />
    </div>
    <div class="mt-[10px] text-[0.85rem] text-c3 dark:text-c21">
      <div class="flex justify-center">
        <span
          v-for="(i, idx) in ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy Terms']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
      <div class="mb-[13px] flex justify-center">
        <span
          v-for="(i, idx) in ['Location', 'Top accounts', 'Hashtags', 'Language']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
    </div>

    <div class="flex flex-col items-center gap-[5px] text-[0.8rem]">
      <div>© 2022 Instagram clone by</div>
      <NuxtLink to="https://github.com/cuzknothz" target="_blank">
        <div
          class="cursor-pointer select-none font-august text-[1.25rem] uppercase tracking-wider text-c2 drop-shadow-md dark:text-c1"
        >
          {{ authorText }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
