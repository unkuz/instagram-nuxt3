<script lang="ts" setup>
import { APP_API } from '@@/apis'
import Suggestions from '@@/components/Huge/Suggestions/index.vue'
import Post from '@@/components/Post/index.vue'
import Stories from '@@/components/Stories/index.vue'
import { IStory, ITimeLine, TSuggestion } from '@@/models'
import { useStoriesStore, useSuggestionStore, useTimeLineStore } from '@@/store'
import { useFetchCamel, useWindowResizeCallback } from '~~/composables'

const rightRef = ref<HTMLElement | null>(null)
const leftRef = ref<HTMLElement | null>(null)
const storiesStore = useStoriesStore()
const timeLineStore = useTimeLineStore()
const suggestionStore = useSuggestionStore()

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useFetch<IStory[]>(APP_API.suggestions.list)
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list)

storiesStore.save(_stories.value ?? [])
timeLineStore.save(_timeline.value ?? [])
suggestionStore.save(_suggestions.value ?? [])

const timeline = computed(() => timeLineStore.data)
const stories = computed(() => storiesStore.data)
const suggestion = computed<TSuggestion[]>(() => suggestionStore.data)

const calcLeftSuggestion = () => {
  if (rightRef.value && leftRef.value && leftRef.value.getClientRects()[0]) {
    rightRef.value.style.left = `${
      leftRef.value?.getClientRects()[0].left + leftRef.value.clientWidth! + 28
    }px`
  }
}

onMounted(() => {
  leftRef.value && calcLeftSuggestion()
})

useWindowResizeCallback(calcLeftSuggestion)
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block" ref="leftRef">
        <Stories :stories="stories" />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div class="fixed top-[93px] hidden w-[293px] text-sm lg:block" ref="rightRef">
        <Suggestions :suggestion="suggestion" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
