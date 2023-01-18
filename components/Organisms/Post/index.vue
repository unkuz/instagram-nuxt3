<script lang="ts" setup>
import { useForceRenderTimer } from '@@/composables'
import moment from 'moment'
import Caption from './Caption.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
import IndividualComment from './IndividualComment.vue'
import LikeCommentCount from './LikeCommentCount.vue'
import React from './React.vue'

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
    tags: string[]
    is_saved: boolean
}

const props = defineProps<IProps>()
const commentRef = $ref<HTMLDivElement | null>(null)
let currentIdx = $ref<number>(0)
const setCurrent = (value: number) => (currentIdx = value)
const mediaArr = $computed(() =>
    props.carousel_media.images.concat(props.carousel_media.videos)
)
const { key } = useForceRenderTimer()
</script>

<template>
    <article
        ref="postRef"
        class="mb-[24px] w-full bg-transparent p-[1px] shadow-c4 dark:shadow-none md:bg-c4 md:shadow-sm md:clip-path-cuzknothz dark:md:bg-transparent"
    >
        <div class="h-full w-full bg-c1 dark:bg-c19 md:clip-path-cuzknothz">
            <Head :avatar="user.profile_pic_url" :user-name="user.username" />
            <Carousel
                :id="id"
                :images="carousel_media.images"
                :videos="carousel_media.videos"
                :has-saved="is_saved"
                :has-liked="has_liked"
                @current-index-carousel="setCurrent($event)"
            />
            <div class="px-[16px] text-xs md:text-sm">
                <React
                    :id="id"
                    :current-idx="currentIdx"
                    :has-liked="has_liked"
                    :media-arr="mediaArr"
                    :has-saved="is_saved"
                />
                <LikeCommentCount
                    :like-count="like_count"
                    :comment-count="comments.length"
                />
                <Caption
                    :user-name="user.username"
                    :caption-content="caption_text"
                    :tags="tags"
                />
                <div
                    :key="key"
                    class="m-[0px_0px_0px_0px] h-[18px] text-c3 dark:text-c21 md:text-[0.8rem]"
                >
                    {{ moment(created_at).fromNow() }}
                </div>
                <div ref="commentRef" class="mt-[15px] w-full">
                    <IndividualComment
                        v-for="(i, idx) in comments"
                        :key="idx"
                        :comment="i"
                    />
                </div>
                <Comment :id="id" />
            </div>
        </div>
    </article>
</template>
