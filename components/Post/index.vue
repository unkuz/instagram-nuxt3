<script lang="ts" setup>
import moment from 'moment'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'
import IndividualComment from '@@/components/Post/IndividualComment.vue';
import { gsap } from 'gsap';
import DownIcon_ from '@@/assets/svg/down_icon_458438i.svg';
import clsx from 'classnames';
import { useForceRenderTimer } from '@@/composables'

export interface IProps {
    created_at: string
    caption_text: string
    has_liked: boolean
    carousel_media: {
        images: {
            id?: number
            src?: string
        }[]
        videos: {
            id: number
            src: string
        }[]
    }
    comments: {
        text: string
        created_at: number
        user: {
            pk: number
            username: string
            full_name: string
            is_private: boolean
            profile_pic_url: string
        }
        comment_like_count: number
        reply: {
            text: string
            created_at: number
            user: {
                pk: number
                username: string
                full_name: string
                is_private: boolean
                profile_pic_url: string
            }
            comment_like_count: number
        }[]
    }[]
    id: string
    is_seen: boolean
    like_count: number
    location: {
        short_name: string
    }
    user: {
        id: string
        username: string
        full_name: string
        profile_pic_url: string
        friendship_status: {
            following: boolean
            outgoing_request: boolean
        }
    }
    tags: string[],
    is_saved: boolean
}

const props = defineProps<IProps>()
const isShowComment = ref<boolean>(true)
const commentRef = ref<HTMLDivElement | null>(null)
const currentIdx = ref<number>(0)
const setCurrent = (value: number) => (currentIdx.value = value)
const mediaArr = computed(() => props.carousel_media.images.concat(props.carousel_media.videos))

const toggleShowComment = () => {
    isShowComment.value = !isShowComment.value
    gsap.to(commentRef.value, {
        height: isShowComment.value ? 200 : 0,
        duration: 0.2
    })
}

const { key } = useForceRenderTimer()


</script>

<template>
    <article ref="postRef" class="mb-[24px] w-full border-gray-200 shadow-gray-200 md:border-[1px] md:shadow-sm">

        <Head :profile_pic_url="user.profile_pic_url" :username="user.username" />
        <Carousel :images="carousel_media.images" :videos="carousel_media.videos"
            @current-index-carousel="setCurrent($event)" :has_liked="has_liked" :id="id" />
        <div class="px-[16px] text-xs md:text-sm">
            <React :currentIdx="currentIdx" :has_liked="has_liked" :mediaArr="mediaArr" :id="id" :hasSaved="is_saved" />
            <LikeCommentCount :likeCount="like_count" :commentCount="comments.length" />
            <Caption :userName="user.username" :captionContent="caption_text" :tags="tags" />
            <div class="m-[0px_0px_0px_0px] h-[18px] text-[0.8rem] text-gray-400" :key="key">
                {{ moment(created_at).fromNow() }}
            </div>
            <div @click="toggleShowComment" v-if="comments.length > 0"
                class="w-full text-[0.8rem]  flex justify-center text-[#00d9ff] select-none cursor-pointer">
                <span>
                    <DownIcon_ :class="clsx('w-[16px] origin-center animate-pulse [&>path]:fill-[#00d9ff]', {
                        'rotate-180-css': isShowComment
                    })" />
                </span>
                <div v-if="!isShowComment">Expand comment</div>
                <div v-else>Collapse comment</div>
            </div>
            <div class="max-h-[200px]  overflow-y-scroll overflow-x-hidden w-full mt-[5px]" ref="commentRef">
                <IndividualComment v-for="(i, idx) in comments" :comment="i" :key="idx" />
            </div>
            <ClientOnly>
                <Comment :id="id" />
            </ClientOnly>
        </div>
    </article>
</template>
<style lang="css" scoped>
.rotate-180-css {
    rotate: 180deg;
}
</style>
