<script setup lang="ts">
import { CSSProperties } from 'vue'
import CookieIcon_ from '@@/assets/svg/cookie.svg'
import Button from '@@/components/Atoms/Button.vue'
import { gsap } from 'gsap'

const containerRef = $ref<HTMLDivElement | null>(null)
const style = computed<CSSProperties>(() => ({}))

let tl: TimelineLite = gsap.timeline({})

const animate = () =>
    tl.to(containerRef, {
        bottom: -100,
        opacity: 0,
        duration: 1,
    })

const acceptCookieUse = () => {
    animate()
}

onMounted(() =>
    tl.to(containerRef, {
        height: 'auto',
        duration: 1,
        bottom: '40px',
        delay: 1,
    })
)

onBeforeUnmount(() => tl.kill())
</script>
<template>
    <div
        ref="containerRef"
        class="fixed -bottom-[100px] left-[40px] hidden h-0 w-[240px] rounded-[0.5rem] bg-c1 p-[40px_24px_20px_24px] shadow-md md:block"
    >
        <CookieIcon_ class="absolute -top-[23px] right-1/2 translate-x-1/2" />
        <div class="text-[0.8rem]">
            <p>
                {{
                    "We care about your data, and we'd love to use cookies to make your experience better 💦"
                }}
            </p>
            <div class="mt-[10px] flex w-full items-center justify-between">
                <NuxtLink to="/privacy-policy" class="cursor-pointer">
                    <span class="text-c9" @click="animate">Privacy Policy</span>
                </NuxtLink>
                <Button
                    text="OK"
                    class="select-none bg-[#00ddb3] px-[20px] py-[6px]  text-c1 duration-500 hover:bg-c15 text-[0.8rem]"
                    @click="acceptCookieUse"
                />
            </div>
        </div>
    </div>
</template>
