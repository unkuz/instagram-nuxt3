<script lang="ts" setup>
import Suggestions from '@@/components/Huge/Suggestions/index.vue'
import Post from '@@/components/Post/index.vue'
import Stories from '@@/components/Stories/index.vue'
import { IStory, ITimeLine, TSuggestion } from '@@/models'
import { useStoriesStore, useSuggestionStore, useTimeLineStore } from '@@/store'
import { useFetchCamel, useWindowResizeCallback } from '~~/composables'

definePageMeta({
    layout: 'main',
})

const rightRef = ref<HTMLElement | null>(null)
const leftRef = ref<HTMLElement | null>(null)
const storiesStore = useStoriesStore()
const timeLineStore = useTimeLineStore()
const suggestionStore = useSuggestionStore()


const { data: _timeline } = await useFetch<ITimeLine[]>(
    'https://mocki.io/v1/537ecd76-8c35-4894-be03-294592836a93'
)

const { data: _stories } = await useFetch<IStory[]>(
    'https://mocki.io/v1/5e99de01-56f3-46a5-a0a0-477dcfd34beb'
)

const { data: _suggestions } = await useFetch<IStory[]>(
    'https://mocki.io/v1/5e99de01-56f3-46a5-a0a0-477dcfd34beb'
)

const { data: _timelinez } = await useFetchCamel(
    'https://mocki.io/v1/dc96749b-96d4-4656-b8a5-83e6f4dc0fda'
)

storiesStore.save(_stories.value ?? [])
timeLineStore.save(_timeline.value ?? [])
suggestionStore.save(_suggestions.value ?? [])

const timeline = computed(() => timeLineStore.data)
const stories = computed(() => storiesStore.data)
const suggestion = computed<TSuggestion[]>(() => suggestionStore.data)

const calcLeftSuggestion = () => rightRef.value!.style.left = `${leftRef.value?.getClientRects()[0].left! + leftRef.value?.clientWidth! + 28}px`

onMounted(() => {
    leftRef.value && calcLeftSuggestion()
})

useWindowResizeCallback(calcLeftSuggestion)

</script>

<template>
    <div class="dark:bg-black/20">
        <div class="relative flex w-full justify-center lg:block">
            <div class="inline-flex w-full flex-col items-center md:w-[614px] lg:block" ref="leftRef">
                <Stories :stories="stories" />
                <Post v-for="i in timeline" :key="i.id" v-bind="i" />
            </div>
            <div class="fixed top-[84px] hidden w-[293px] bg-white text-sm lg:block" ref="rightRef">
                <Suggestions :suggestion="suggestion" />
            </div>
        </div>
        <NuxtPage />
    </div>
</template>
