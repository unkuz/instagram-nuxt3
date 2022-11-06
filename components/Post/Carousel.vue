<script lang="ts" setup>
import ArrowIcon_ from '@@/assets/svg/arrow_icon.svg';
import { useCarousel } from '@@/composables';
import { gsap } from 'gsap';
import Image from './Image.vue';
import Like from './Like.vue';
import Unlike from './Unlike.vue';
import Video from './Video.vue';

interface IProps {
    images: any
    videos: any
    has_liked: boolean
    id: string
}
const props = defineProps<IProps>()
const emit = defineEmits(['currentIndexCarousel'])
const containerMediaRef = ref<HTMLDivElement>()

const { next, prev, current } = useCarousel(containerMediaRef)

watch(current, (idx) => {
    emit('currentIndexCarousel', idx)

    if (containerMediaRef.value) {
        gsap.to(containerMediaRef.value, {
            height: containerMediaRef.value.children[idx].children[0].clientHeight,
            duration: 0
        })
    }
})
const isShowPre = computed(() => current.value !== 0)
const isShowNext = computed(() => current.value !== props.images.concat(props.videos).length - 1)
const totalMedia = computed(() => props.images.concat(props.videos).length)
</script>

<template>
    <div class="relative overflow-hidden">
        <div class="inline-flex min-w-full select-none" ref="containerMediaRef">
            <Image v-for="i in images" :key="i.id" :src="i.src" :idPost="id" />

            <Video v-for="(video, idx) in videos" :key="idx" :video="video" :idPost="id" />
        </div>
        <div v-if="isShowPre" class="-translate-y-1/ absolute left-5 top-[50%] h-[22px] w-[22px]" @click="prev">
            <ArrowIcon_ class="rotate-180 opacity-80" />
        </div>

        <div v-if="isShowNext" class="absolute right-5 top-[50%] h-[22px] w-[22px] -translate-y-1/2" @click="next">
            <ArrowIcon_ class="opacity-80" />
        </div>
        <div v-show="totalMedia > 1"
            class="absolute top-[20px] right-[20px] flex min-w-[40px] justify-center rounded-full bg-black/50 px-[8px] py-[3px] text-[0.8rem] text-white">
            {{ `${current + 1}/${totalMedia}` }}
        </div>
        <Unlike v-if="has_liked" />
        <Like v-else />
    </div>
</template>
