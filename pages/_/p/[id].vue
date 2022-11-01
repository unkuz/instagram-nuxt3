<template>
    <div>
        <BackDrop>
            <div class="flex aspect-[1.5/1] w-[500px] flex-col bg-fuchsia-400 xl:h-[70vh] xl:w-auto xl:flex-row translate-y-[200%] opacity-0"
                ref="postRef">
                <div class="block h-[60px] border-b-[1px] border-black/20 xl:hidden"></div>
                <div class="h-full bg-red-400 xl:w-[60%]"></div>
                <div class="h-full bg-yellow-400 xl:w-[40%]">
                    <div class="hidden h-[60px] border-b-[1px] border-black/20 xl:block"></div>
                </div>
            </div>
        </BackDrop>
    </div>
</template>

<script setup lang="ts">
import BackDrop from '@@/components/Utils/BackDrop.vue'
import { useClickOutSide } from '@@/composables'
import { gsap } from 'gsap';
const postRef = ref<HTMLDivElement>(null)
const router = useRouter()

useClickOutSide(postRef, () => {
    router.back()
})

onMounted(() => {
    gsap.to(postRef.value, {
        translateY: 0,
        ease: "elastic.out(1, 0.75)",
        duration: 0.3,
        opacity: 1
    })
})
</script>

<style scoped>

</style>
