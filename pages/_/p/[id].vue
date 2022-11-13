<template>
    <div>
        <BackDrop>
            <div class="flex flex-row bg-white translate-y-[100vh]" ref="postRef">
                <div class="h-full w-[700px]">
                    <article class=" w-full border-gray-200 shadow-gray-200 md:border-[1px] md:shadow-sm">

                        <Head :profile_pic_url="profilePicUrl" :username="userName" />
                        <Carousel :images="images" :videos="videos" @current-index-carousel="setCurrent($event)"
                            :has_liked="hasLiked" :id="id" />
                        <div class="px-[16px] text-xs md:text-sm">
                            <React :currentIdx="currentIdx" :has_liked="hasLiked" :mediaArr="mediaArr" :id="id" />
                            <LikeCommentCount :likeCount="likeCount" :commentCount="commentCount" />
                            <div class="m-[8px_0px_5px_0px] h-[18px] text-[0.8rem] text-gray-400">
                                {{ moment(createdAt).fromNow() }}
                            </div>

                        </div>
                    </article>
                </div>
                <div class="h-auto  w-[500px] text-[0.85rem] p-[15px]">
                    <div>
                        <Caption :userName="userName" :captionContent="captiontext" :tags="tags" />
                    </div>
                    <div :class="clsx('h-[400px] w-full overflow-y-scroll overflow-x-hidden my-[10px]', {
                        'flex justify-center items-center': !hasComment
                    })">
                        <template v-if="hasComment">
                            <IndividualComment v-for="(i, idx) in comments" :comment="i" :key="idx" />
                        </template>
                        <template v-else>
                            <div> No comment to show !! </div>
                        </template>
                    </div>
                    <div class="">
                        <ClientOnly>
                            <Comment :id="id" />
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </BackDrop>
    </div>
</template>

<script setup lang="ts">
import Caption from '@@/components/Post/Caption.vue';
import Carousel from '@@/components/Post/Carousel.vue';
import Comment from '@@/components/Post/Comment.vue';
import Head from '@@/components/Post/Head.vue';
import IndividualComment from '@@/components/Post/IndividualComment.vue';
import LikeCommentCount from '@@/components/Post/LikeCommentCount.vue';
import React from '@@/components/Post/React.vue';
import BackDrop from '@@/components/Utils/BackDrop.vue';
import { useClickOutSide, useLockScroll } from '@@/composables';
import { useViewPostDetailStore } from '@@/store';
import clsx from 'classnames';
import { gsap } from 'gsap';
import moment from 'moment';
import { ITimeLine } from '~~/models';

useLockScroll()

onMounted(() => {
    gsap.to(postRef.value, {
        translateY: 0,
        ease: "elastic.out(1, 0.75)",
        duration: 0.3,
        opacity: 1
    })
})

const postRef = ref<HTMLDivElement | null>(null)
const router = useRouter()
const postDetailStore = useViewPostDetailStore()
const currentIdx = ref<number>(0)

const { data: _timeline } = await useFetch<ITimeLine[]>(
    'https://mocki.io/v1/bbd9ad8d-fbd8-4d95-a9ac-ee6416513aae'
)

postDetailStore.setPostDetail(router.currentRoute.value.params.id as string)

const profilePicUrl = computed<string>(() => postDetailStore.post.user.profile_pic_url)
const images = computed<{
    id: string, src: string
}[]>(() => postDetailStore.post.carousel_media.images)
const userName = computed<string>(() => postDetailStore.post.user.username)
const videos = computed<{
    id: string, src: string
}[]>(() => postDetailStore.post.carousel_media.videos)
const hasLiked = computed<boolean>(() => postDetailStore.post.has_liked)
const id = computed<string>(() => postDetailStore.post.id)
const likeCount = computed<number>(() => postDetailStore.post.like_count)
const createdAt = computed<string>(() => postDetailStore.post.created_at)
const commentCount = computed(() => postDetailStore.post.comments.length)
const captiontext = computed<string>(() => postDetailStore.post.caption_text)
const tags = computed<string[]>(() => postDetailStore.post.tags)
const comments = computed(() => postDetailStore.post.comments)
const hasComment = computed<boolean>(() => postDetailStore.post.comments.length > 0)

const setCurrent = (value: number) => (currentIdx.value = value)

useClickOutSide(postRef, () => {
    router.back()
})

const mediaArr = computed<{
    id: string,
    src: string
}[]>(() => postDetailStore.post.carousel_media.images.concat(postDetailStore.post.carousel_media.videos))


</script>
