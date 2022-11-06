<script lang="ts" setup>
import Explore from '@@/components/Explore/index.vue'
import { useExploreStore } from '@@/store'
import { chunk, shuffle } from 'lodash';

definePageMeta({
    layout: 'main',
})

const exploreStore = useExploreStore()

const explore = computed(() => exploreStore.list)
</script>

<template>
    <div class="mb-[84px]">
        <div v-for="(i, idx) in chunk(shuffle(explore), 3)" :key="idx">
            <Explore :cluster="i" />
        </div>
        <NuxtChild />
    </div>
</template>
