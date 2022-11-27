<script lang="ts" setup>
import { SECTION } from '@@/constants';
import { useGlobalStore } from '@@/store';

const globalStore = useGlobalStore()

const handleSelect = (section: SECTION) => {
    globalStore.setSection(section)
}
</script>

<template>
    <NuxtLink to="/">
        <div @click="handleSelect(SECTION.HOME)"
            class="mt-[7px] h-[29px] w-[103px] cursor-pointer select-none bg-cover bg-center" :style="{
              backgroundImage: `url(${'/icon/1b47f9d0e595.png'})`,
            }"></div>
    </NuxtLink>
</template>
