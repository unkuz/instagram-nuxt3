<script lang="ts" setup>
import { APP_API } from "@@/apis";
import Suggestions from "@@/components/Huge/Suggestions/index.vue";
import Post from "@@/components/Organisms/Post/index.vue";
import Stories from "@@/components/Stories/index.vue";
import { IStory, ITimeLine, TSuggestion } from "@@/models";
import { useAuthStore, useStoriesStore, useSuggestionStore, useTimeLineStore } from "@@/store";
import { useFetchCamel, useWindowResizeCallback } from "@@/composables";

const rightRef = $ref<HTMLElement | null>(null);
const leftRef = $ref<HTMLElement | null>(null);

const storiesStore = useStoriesStore();
const timeLineStore = useTimeLineStore();
const suggestionStore = useSuggestionStore();
const authStore = useAuthStore();

const isLogin = $computed(() => authStore.data.isLogin);

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list);
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list);
const { data: _suggestions } = await useFetch<IStory[]>(APP_API.suggestions.list);
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list);

storiesStore.save(_stories.value ?? []);
timeLineStore.save(_timeline.value ?? []);
suggestionStore.save(_suggestions.value ?? []);

const timeline = $computed(() => timeLineStore.data);
const stories = $computed(() => storiesStore.data);
const suggestion = $computed<TSuggestion[]>(() => suggestionStore.data);

const calcLeftSuggestion = () => {
  if (rightRef && leftRef && leftRef.getClientRects()[0]) {
    rightRef.style.left = `${leftRef?.getClientRects()[0].left + leftRef.clientWidth! + 28}px`;
  }
};

onMounted(() => {
  leftRef && calcLeftSuggestion();
});

useWindowResizeCallback(calcLeftSuggestion);
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div ref="leftRef" class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories v-if="isLogin" :stories="stories" />
        <Post v-for="i in timeline" :key="i.id" v-bind="i" />
      </div>
      <div ref="rightRef" class="fixed left-0 top-[84px] hidden w-[293px] text-sm lg:block">
        <Suggestions v-if="isLogin" :suggestion="suggestion" />
        <div v-else class="h-[500px]">
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-1817809598132751"
            data-ad-slot="9199689868"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
