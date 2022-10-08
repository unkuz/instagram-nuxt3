<script lang="ts" setup>
import Suggestions from '~~/components/Huge/Suggestions/index.vue'
import Post from '~~/components/Post/index.vue'
import Stories from '~~/components/Stories/index.vue'
import { IStory, ITimeLine } from '~~/models'
import { useStoriesStore } from '~~/store/stories'
import { useSuggestionStore } from '~~/store/suggestion'
import { useTimeLineStore } from '~~/store/timeline'

definePageMeta({
  layout: 'main',
})

const storiesStore = useStoriesStore()
const timeLineStore = useTimeLineStore()
const suggestionStore = useSuggestionStore()

const { data: _timeline } = await useFetch<ITimeLine[]>(
  'https://mocki.io/v1/46fba3d0-353b-4983-8acd-067e2af0b3c1'
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
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories :stories="stories" />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div class="absolute top-0 right-0 hidden w-[293px] bg-white text-sm lg:block" ref="rightRef">
        <Suggestions :suggestion="suggestion" />
      </div>
    </div>
    <NuxtChild />
  </div>
</template>