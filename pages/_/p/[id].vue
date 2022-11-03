<template>
    <div>
        <BackDrop>
            <div class="flex  flex-row bg-white    " ref="postRef">
                <div class="h-full w-[700px]">
                    <article ref="postRef" class=" w-full border-gray-200 shadow-gray-200 md:border-[1px] md:shadow-sm">

                        <Head :profile_pic_url="postDetailStore.post.user.profile_pic_url"
                            :username="postDetailStore.post.user.username" />
                        <Carousel :images="postDetailStore.post.carousel_media.images"
                            :videos="postDetailStore.post.carousel_media.videos"
                            @current-index-carousel="setCurrent($event)" :has_liked="postDetailStore.post.has_liked"
                            :id="postDetailStore.post.id" />
                        <div class="px-[16px] text-xs md:text-sm">
                            <React :currentIdx="currentIdx" :has_liked="postDetailStore.post.has_liked"
                                :mediaArr="mediaArr" :id="postDetailStore.post.id" />
                            <CaptionComment :like_count="postDetailStore.post.like_count"
                                :created_at="postDetailStore.post.created_at" :comments="postDetailStore.post.comments"
                                :caption_text="postDetailStore.post.caption_text" :user="postDetailStore.post.user" />

                        </div>
                    </article>
                </div>
                <div class="h-auto  w-[500px]">

                    <div class="w-full h-full flex  items-end px-[30px]">
                        <ClientOnly>
                            <Comment />
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </BackDrop>
    </div>
</template>

<script setup lang="ts">
import BackDrop from '@@/components/Utils/BackDrop.vue'
import { useClickOutSide } from '@@/composables'
import { gsap } from 'gsap';
import { useViewPostDetailStore } from '@@/store';
import Head from '@@/components/Post/Head.vue';
import Carousel from '@@/components/Post/Carousel.vue';
import React from '@@/components/Post/React.vue';
import CaptionComment from '@@/components/Post/CaptionComment.vue';
import Comment from '@@/components/Post/Comment.vue';
import { ITimeLine } from '~~/models';


const postRef = ref<HTMLDivElement>(null)
const router = useRouter()
const postDetailStore = useViewPostDetailStore()
const currentIdx = ref(0)


const { data: _timeline } = await useFetch<ITimeLine[]>(
    'https://mocki.io/v1/dc96749b-96d4-4656-b8a5-83e6f4dc0fda'
)

const detail = _timeline.value.find((i) => i.id === router.currentRoute.value.params.id)
postDetailStore.setPostDetail(router.currentRoute.value.params.id as string)


const setCurrent = (value: number) => (currentIdx.value = value)
useClickOutSide(postRef, () => {
    router.back()
})
const mediaArr = computed(() => postDetailStore.post.carousel_media.images.concat(postDetailStore.post.carousel_media.videos))


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
