<script setup lang="ts">
import BackIcon_ from '@/assets/svg/mingcute/back.svg'
import EditIcon_ from '@/assets/svg/mingcute/edit.svg'
import ListUser from '@/components/Organisms/Inbox/List/ListUser.vue'
import { axios } from '@/services/axios'
import { useInboxStore } from '@/store'
import { APP_API } from '~~/apis'
import IndividualLine from './IndividualLine.vue'

const inboxStore = useInboxStore()

const { data, pending } = await useLazyAsyncData('inbox-list', async () => {
  const res = await axios.get(APP_API.INBOX.LIST)
  return res.data
})
watchEffect(() => {
  inboxStore.save(unref(data))
})

const inboxList = $computed(() => inboxStore.data)
</script>

<template>
  <div class="mx-auto w-full px-[10px] text-[.85rem] md:w-[490px] md:px-0">
    <div class="md:h-[calc(100vh-84px-24px)]">
      <div class="flex h-[60px] w-full items-center justify-between text-[.85rem] md:hidden">
        <div class="flex items-center gap-[10px]">
          <NuxtLink to="/_"><BackIcon_ /> </NuxtLink> <span class="font-[600]">Message</span>
        </div>

        <EditIcon_ class="[&__path]:fill-c17" />
      </div>
      <div class="flex items-center justify-between gap-[20px]">
        <div
          class="relative flex h-[45px] w-full cursor-text items-center rounded-md bg-c4/50 px-[16px] dark:bg-c23/50"
        >
          <svg
            width="16"
            height="16"
            fill="#8e8e8e"
            aria-label="Search"
            class="_8-yf5 [&amp;>path]:stroke-black [&amp;>path]:dark:stroke-white"
            color="#8e8e8e"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5zM16.511 16.511 22 22"
            ></path></svg
          ><span class="absolute top-1/2 left-[45px] -translate-y-1/2 text-sm dark:text-c1"
            >Search</span
          ><input
            type="text"
            class="absolute top-1/2 left-1/2 h-[30px] w-[90%] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-transparent text-sm caret-c7 focus:outline-none"
          />
        </div>
      </div>

      <!-- <ListUser /> -->

      <div
        class="h-[calc(100vh-60px-45px-120px)] overflow-scroll md:h-[calc(100vh-84px-60px-120px)]"
      >
        <template v-if="inboxList.length">
          <IndividualLine
            v-for="(i, idx) in inboxList"
            :key="idx"
            :profile_pic_url="i.recipient?.profile_pic_url"
            :username="i.recipient?.user_name"
            :preview_lastest_message="i?.messages?.[0]?.content"
            :created_at="i?.messages?.[0]?.created_at"
            :message_not_seen_count="1"
          />
        </template>
        <template v-else> Empty </template>
      </div>
    </div>
  </div>
</template>
