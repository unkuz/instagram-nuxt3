<script setup lang="ts">
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useFeedStore } from '~~/store'
import Head from '@/components/Organisms/Feed/List/Head.vue'
import Caption from '@/components/Organisms/Feed/List/Caption.vue'
import TimeFromNow from '@/components/Atoms/TimeFromNow.vue'

const feedStore = useFeedStore()
const feed = $computed(() => feedStore.data[0])

const back = () => navigateTo('/')
</script>

<template>
  <div>
    <BackDrop @click.self="back">
      <div class="flex h-[80vh] w-[80vw] bg-fuchsia-50">
        <div class="flex flex-1 flex-col bg-red-200"></div>
        <div class="flex h-full !w-[500px] flex-col bg-yellow-200 px-[10px]">
          <Head
            class="bg-c2/50"
            :avatar="feed.user.profile_pic_url"
            :user-name="feed.user.username"
          />
          <Caption
            :user-name="feed.user.username"
            :caption-content="feed.caption_text"
            :tags="feed.tags"
          />
          <TimeFromNow
            :time="feed.created_at"
            class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
          />
        </div>
        <div></div>
      </div>
    </BackDrop>
  </div>
</template>

<style></style>
