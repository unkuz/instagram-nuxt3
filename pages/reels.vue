<script lang="ts" setup>
import { APP_API } from '@@/apis'
import { IStory, ITimeLine } from '@@/models'
import ErrorPage from '~~/components/Utils/ErrorPage.vue'

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useFetch<IStory[]>(
  APP_API.suggestions.list
)
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list)
</script>

<template>
  <div>
    <ErrorPage />
  </div>
  <!-- <div>
    <div
      class="flex h-screen w-full snap-y snap-mandatory flex-col overflow-y-scroll scrollbar-hide"
    >
      <div
        v-for="(_i, idx) in 1"
        :key="idx"
        class="relative h-screen w-full snap-center"
      >
        <video
          class="h-screen w-full object-cover"
          src="/video/242322324_812426336116660_1281566458903572911_n.mp4"
          autoplay
          loop
        />
        <div
          class="absolute bottom-[50px] right-[25px] flex flex-col space-y-[35px]"
        >
          <div>
            <svg
              aria-label="Like"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
              />
            </svg>
            <span>190k</span>
          </div>
          <div>
            <svg
              aria-label="Comment"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <span>656</span>
          </div>
          <div>
            <svg
              aria-label="Share Post"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              />
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>

          <svg
            aria-label="More options"
            class="_ab6-"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6" cy="12" r="1.5" />
            <circle cx="18" cy="12" r="1.5" />
          </svg>
        </div>
      </div>
    </div>
  </div> -->
</template>
