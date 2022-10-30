<script lang="ts" setup>
import Suggestions from '@@/components/Huge/Suggestions/index.vue'
import Post from '@@/components/Post/index.vue'
import Stories from '@@/components/Stories/index.vue'
import { IStory, ITimeLine } from '@@/models'
import { useStoriesStore, useSuggestionStore, useTimeLineStore } from '@@/store'

definePageMeta({
  layout: 'main',
})

const storiesStore = useStoriesStore()
const timeLineStore = useTimeLineStore()
const suggestionStore = useSuggestionStore()

const { data: _timeline } = await useFetch<ITimeLine[]>(
  'https://mocki.io/v1/546b9d75-01bc-4e88-a496-125656ead489'
)
const { data: _stories } = await useFetch<IStory[]>(
  'https://mocki.io/v1/5e99de01-56f3-46a5-a0a0-477dcfd34beb'
)
const { data: _suggestions } = await useFetch<IStory[]>(
  'https://mocki.io/v1/5e99de01-56f3-46a5-a0a0-477dcfd34beb'
)

storiesStore.save(_stories.value)
timeLineStore.save(_timeline.value)
suggestionStore.save(_suggestions.value)

const timeline = computed(() => timeLineStore.data)
const stories = computed(() => storiesStore.data)
const suggestion = computed(() => suggestionStore.data)

const rightRef = ref<HTMLElement>(null)

const positionRight = ref(() => {
  rightRef.value.style.top = `${window.scrollY}px`
})

onMounted(() => {
  positionRight.value()
  addEventListener('scroll', positionRight.value)
})

onUnmounted(() => {
  removeEventListener('scroll', positionRight.value)
})
</script>

<template>
  <div class="dark:bg-black/20">
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories :stories="stories" />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div class="absolute top-0 right-0 hidden w-[293px] bg-white text-sm lg:block" ref="rightRef">
        <Suggestions :suggestion="suggestion" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
