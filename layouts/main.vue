<script lang="ts" setup>
import Header from '@@/components/Header/index.vue'
import { SECTION } from '@@/constants/section'
import { useGlobalStore } from '@@/store'
import Navbarbottom from './navbarbottom.vue'
import Extension from '@@/components/Extension/index.vue';

const globalStore = useGlobalStore()
const isShowNavBarBottom = computed(
    () => !(globalStore.getIsMobile && globalStore.section === SECTION.MESSENGER)
)
</script>

<template>
    <div>
        <Header />
        <Extension/>
        <div class="mx-auto mt-[50px] w-screen overflow-hidden sm:mt-[84px] sm:overflow-visible lg:w-[935px]">
            <slot />
        </div>
        <Navbarbottom v-if="isShowNavBarBottom" />
    </div>
</template>
