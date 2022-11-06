<script lang="ts" setup>
import CaptionComment from './CaptionComment.vue'
import Carousel from './Carousel.vue'
import Comment from './Comment.vue'
import Head from './Head.vue'
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
}

const props = defineProps<IProps>()

const currentIdx = ref(0)

const setCurrent = (value: number) => (currentIdx.value = value)

const mediaArr = computed(() => props.carousel_media.images.concat(props.carousel_media.videos))
</script>

<template>
    <article ref="postRef" class="mb-[24px] w-full border-gray-200 shadow-gray-200 md:border-[1px] md:shadow-sm">

        <Head :profile_pic_url="user.profile_pic_url" :username="user.username" />
        <Carousel :images="carousel_media.images" :videos="carousel_media.videos"
            @current-index-carousel="setCurrent($event)" :has_liked="has_liked" :id="id" />
        <div class="px-[16px] text-xs md:text-sm">
            <React :currentIdx="currentIdx" :has_liked="has_liked" :mediaArr="mediaArr" :id="id" />
            <CaptionComment :like_count="like_count" :created_at="created_at" :comments="comments" :tags="tags"
                :caption_text="caption_text" :user="user" />
            <ClientOnly>
                <Comment />
            </ClientOnly>
        </div>
    </article>
</template>
