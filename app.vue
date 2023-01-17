<script lang="ts" setup>
import Loading from '@@/components/Atoms/Loading.vue'
import NewPost from '@@/components/Huge/NewPost/index.vue'
import Cookie from '@@/components/Utils/Cookie.vue'
import More from '@@/components/Utils/More.vue'
import Prelude from '@@/components/Utils/Prelude.vue'
import {
    usePrelude,
    useResizeWindow,
    useScroll,
    useScrollBarTheme,
    useSignature,
} from '@@/composables'
import { SectionEnum } from '@@/constants'
import { registerSeviceWorkerPWA } from '@@/helpers'
// import Luv from '@@/lotties/luv.lotties.json'
import { useGlobalStore, useMoreStore, useThemeStore } from '@@/store'

const globalStore = useGlobalStore()
const moreStore = useMoreStore()
const themeStore = useThemeStore()
const { isShowPrelude } = usePrelude()

const isDarkMode = $computed(() => themeStore.darkMode)
const section = $computed(() => globalStore.section)
const isMobile = $computed(() => globalStore.getIsMobile)
const isShowMore = $computed(() => moreStore.isShow)

registerSeviceWorkerPWA()
useScrollBarTheme()
useScroll()
useSignature()
useResizeWindow()

useHead({
    meta: [{ name: 'theme-color', content: isDarkMode ? '#121212' : '#fff' }],
})
</script>

<template>
    <div
        :class="[
            'scroll-smooth font-quicksan',
            {
                'dark ': isDarkMode,
            },
        ]"
    >
        <div
            class="selection:bg-c2 selection:text-c1 dark:selection:bg-c1 dark:selection:text-c2"
        >
            <div class="min-h-screen dark:bg-c19 dark:text-c21">
                <NuxtLayout>
                    <Prelude v-if="isShowPrelude" />
                    <NuxtLoadingIndicator
                        color="#7fccff"
                        :height="3"
                        :duration="500"
                    />
                    <Loading />
                    <NuxtPage />
                </NuxtLayout>
                <NewPost v-if="section === SectionEnum.NEW_POST && !isMobile" />
                <More v-if="isShowMore" />
                <Cookie />
            </div>
        </div>
        <!-- <ClientOnly>
      <Vue3Lottie :animationData="Luv" class="pointer-events-none absolute inset-0 h-full w-full">
      </Vue3Lottie>
    </ClientOnly> -->
    </div>
</template>
