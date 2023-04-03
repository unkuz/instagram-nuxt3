<script setup lang="ts">
import FindPeople from '../Atoms/Nav/FindPeople.vue'
import HomeIcon from '../Atoms/Nav/HomeIcon.vue'
import Messenger from '../Atoms/Nav/Messenger.vue'
import Reels from '../Atoms/Nav/Reels.vue'
import Search from '@/components/Atoms/Nav/Search.vue'
import ActivityFeed from '@/components/Atoms/Nav/ActivityFeed.vue'
import NewPost from '../Atoms/Nav/NewPost.vue'
</script>
<template>
  <header
    class="fixed left-0 top-0 z-50 flex h-screen w-[60px] flex-col items-center justify-between border-r-[1px] border-c4 bg-c1 py-[50px] dark:bg-c19"
  >
    <div class="mb-[100px]">
      <svg
        aria-label="Instagram"
        class="_ab6-"
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"
        ></path>
      </svg>
    </div>
    <div class="flex flex-col gap-[30px]">
      <NuxtLink to="/">
        <HomeIcon :is-select="false" />
      </NuxtLink>
      <Search :is-select="false" />
      <NuxtLink to="/explore/">
        <FindPeople :is-select="false" />
      </NuxtLink>
      <NuxtLink to="/reels">
        <Reels :is-select="false" />
      </NuxtLink>
      <NuxtLink to="/inbox/">
        <Messenger :is-select="false" :has-new="true" />
      </NuxtLink>
      <ActivityFeed :is-select="false" />
      <NewPost :is-select="false" />
    </div>
    <div>More</div>
  </header>
</template>
