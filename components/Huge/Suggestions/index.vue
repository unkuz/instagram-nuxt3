<script lang="ts" setup>
import Avatar from '~~/components/Tiny/Avatar.vue'
import { TSuggestion } from '~~/models'
import { useAuthStore } from '~~/store/auth'
import { SizeAvatarEnum } from '~~/type'
import Item from './Item.vue'

interface IProps {
  suggestion: TSuggestion[]
}

defineProps<IProps>()

const { M } = SizeAvatarEnum
const authStore = useAuthStore()
const authorText = 'cuzknothz'
</script>

<template>
  <div class="select-none" draggable="false">
    <div class="mt-[18px] mb-[22px] flex h-[56px] items-center justify-between">
      <Avatar :size="M" :url="authStore.avatar" />
      <div class="-ml-[70px]">
        <p class="cursor-pointer font-medium">cuzknothz</p>
        <p class="text-gray-600">cuzknothz</p>
      </div>
      <div class="cursor-pointer text-[#1da0f6]">Switch</div>
    </div>
    <div class="flex h-[11px] items-center justify-between text-sm text-gray-600">
      <div class="text-gray-600">Suggestions for you</div>
      <div class="cursor-pointer">See All</div>
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
    <div class="mt-[10px]">
      <div class="flex justify-center text-gray-600">
        <span
          v-for="(i, idx) in ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy Terms']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
      <div class="mb-[13px] flex justify-center text-gray-600">
        <span
          v-for="(i, idx) in ['Location', 'Top accounts', 'Hashtags', 'Language']"
          :key="idx"
          class="cursor-not-allowed after:content-['.'] last:after:content-['']"
          >{{ i }}</span
        >
      </div>
    </div>

    <div class="flex flex-col items-center space-y-2 text-[0.85rem]">
      <div>© 2022 Instagram clone by</div>
      <a href="https://github.com/cuzknothz" target="_blank">
        <div
          title="Cuzknothz github"
          class="cursor-pointer select-none font-august text-[1.25rem] uppercase tracking-wider text-black drop-shadow-md"
        >
          {{ authorText }}
        </div>
      </a>
    </div>
  </div>
</template>
