<script setup lang="ts">
import BackIcon_ from '@/assets/svg/mingcute/back.svg'
import EditIcon_ from '@/assets/svg/mingcute/edit.svg'
import ListUser from '@/components/Organisms/Inbox/List/ListUser.vue'
import { useInboxStore } from '@/store'
import IndividualLine from './IndividualLine.vue'
import Search from '@/components/Molecules/Search.vue'

const inboxStore = useInboxStore()

let keyword = ref('')

let isFocus = $ref(false)

const inboxList = $computed(() =>
  inboxStore.data.filter((i) => i.recipient?.user_name.includes(keyword.value))
)
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
        <Search v-model:value="keyword" v-model:is-focus="isFocus" class="h-[45px] w-full" />
      </div>

      <ListUser :keyword="keyword" />

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
            :id="i.id"
          />
        </template>
        <template v-else> Empty </template>
      </div>
    </div>
  </div>
</template>
