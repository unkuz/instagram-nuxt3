<script lang="ts" setup>
import { gsap } from 'gsap'
const progressBarRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    gsap.to(progressBarRef.value, {
        width: '100%',
        duration: 1,
    })
})
</script>

<template>
    <div
        ref="progressBarRef"
        class="fixed top-0 left-0 z-50 h-[3px] w-0 bg-c2"
    />
</template>
