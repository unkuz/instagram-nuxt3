<script lang="ts" setup>
import NewPost from '@@/components/Huge/NewPost/index.vue'
import NewPostMobile from '@@/components/Huge/NewPostMobile/index.vue'
import More from '@@/components/Utils/More.vue'
import Prelude from '@@/components/Utils/Prelude.vue'
import { usePrelude, useResizeWindow } from '@@/composables'
import { SECTION } from '@@/constants'
import { useGlobalStore, useMoreStore, useStoryStore, useThemeStore } from '@@/store'

const darkMode = ref(true)

useHead({
    title: 'Instagram',
    meta: [
        {
            name: 'viewport',
            content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
        },
        {
            name: 'theme-color',
            content: '#000',
        },
    ],
})

const globalStore = useGlobalStore()
const storyStore = useStoryStore()
const moreStore = useMoreStore()
const themeStore = useThemeStore()
const { isShowPrelude } = usePrelude()
const { width, height } = useResizeWindow()

const isDarkMode = computed(() => themeStore.darkMode)
const isTransition = computed(() => globalStore.getIsTransition)
const section = computed(() => globalStore.getSection)
const isMobile = computed(() => globalStore.getIsMobile)
const isShowStory = computed(() => storyStore.getIsShowStory)
const isShowMore = computed(() => moreStore.isShow)

watch([width, height], () => {
    globalStore.setClientSize(width.value, height.value)
    darkMode.value = !darkMode.value
})

watch(isTransition, () => {
    if (isTransition) {
        window.scrollTo({ top: 0 })
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            document.body.style.overflow = ''
        }, 1000)
    }
})

if (process.client) {
    window.addEventListener('load', () => {
        if (!('serviceWorker' in navigator)) {
            throw new Error('serviceWorker is not supported in current browser!')
        }
        navigator.serviceWorker.register('/sw.js')
    })
}

onMounted(() => {
    console.log('Developed by %c Cuzknothz ', 'background: black; color: #fff')
})

watch(isDarkMode, (value) => {
    const htmlElement = document.querySelector('html')
    if (value) {
        htmlElement.classList.add('dark')
    } else {
        htmlElement.classList.remove('dark')
    }
})

const logSomeError = (e: Error) => {
    console.log({ e })
}
</script>

<template>
    <!-- <NuxtErrorBoundary @error="logSomeError"> -->
    <div class="scroll-smooth font-quicksan selection:bg-[#000000] selection:text-white">
        <Prelude v-if="isShowPrelude" />
        <NuxtLayout>
            <NuxtLoadingIndicator color="#1da0f6" />
            <NuxtPage />
        </NuxtLayout>
        <NewPost v-if="section === SECTION.NEW_POST && !isMobile" />
        <NewPostMobile v-if="section === SECTION.NEW_POST && isMobile" />
        <More v-if="isShowMore" />
    </div>
    <!-- </NuxtErrorBoundary> -->
</template>
