<script lang="ts" setup>
import { APP_API } from '@@/apis'
import Suggestions from '@@/components/Huge/Suggestions/index.vue'
import Stories from '@@/components/Molecules/Stories/index.vue'
import Post from '@@/components/Organisms/Post/index.vue'
import { useFetchCamel, useWindowResizeCallback } from '@@/composables'
import { IStory, ITimeLine } from '@@/models'
import {
  useAuthStore,
  useStoriesStore,
  useSuggestionStore,
  useTimeLineStore,
} from '@@/store'

const rightRef = $ref<HTMLElement | null>(null)
const leftRef = $ref<HTMLElement | null>(null)

const storiesStore = useStoriesStore()
const timeLineStore = useTimeLineStore()
const suggestionStore = useSuggestionStore()
const authStore = useAuthStore()

const { data: _timeline } = await useLazyFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useLazyFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useLazyFetch<IStory[]>(APP_API.stories.list)

storiesStore.save(_stories.value ?? [])
timeLineStore.save(_timeline.value ?? [])
suggestionStore.save(_suggestions.value ?? [])

const timeline = $computed(() => timeLineStore.data)
const stories = $computed(() => storiesStore.data)

const calcLeftSuggestion = () => {
  if (rightRef && leftRef && leftRef.getClientRects()[0]) {
    rightRef.style.left = `${
      leftRef?.getClientRects()[0].left + leftRef.clientWidth! + 28
    }px`
  }
}

onMounted(() => {
  leftRef && calcLeftSuggestion()
})

useWindowResizeCallback(calcLeftSuggestion)
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div
        ref="leftRef"
        class="inline-flex w-full flex-col items-center md:w-[614px] lg:block"
      >
        <Stories :stories="stories" />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div
        ref="rightRef"
        class="fixed left-0 top-[84px] hidden w-[293px] text-sm lg:block"
      >
        <Suggestions />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
