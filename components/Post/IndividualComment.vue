<script setup lang="ts">
import Avatar from '@@/components/Tiny/Avatar.vue';
import { SizeAvatarEnum } from '@@/type';
import moment from 'moment';
import { useForceRenderTimer } from '@@/composables';

interface IProps {
    comment: any
}
defineProps<IProps>()

const { key } = useForceRenderTimer()
const { S } = SizeAvatarEnum
</script>

<template>
    <div class="mb-[10px]" :id="`post_detail_${comment.id}`">
        <div class=" relative my-[5px]  rounded-md ">
            <div class="flex gap-[10px] items-center mx-[10px]">
                <NuxtLink :to="`/${comment.user.username}`">
                    <Avatar :url="comment.user.profile_pic_url" :size="S" />
                </NuxtLink>
                <NuxtLink :to="`/${comment.user.username}`">
                    <p>{{ comment.user.username }}</p>
                </NuxtLink>
                <p class=" text-[0.7rem] text-[#666]" :key="key">{{ moment(comment.created_at).fromNow() }}</p>
            </div>
            <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
                <p>{{ comment.text }}</p>
                <div class="flex gap-[10px] mt-[5px] text-[0.8rem]">
                    <div class="flex gap-[3px] text-red-500"><span>{{ comment.comment_like_count }}</span>
                        <span class="cursor-pointer">Like</span>
                    </div>
                    <p class="cursor-pointer text-red-500">Reply</p>
                </div>
            </div>
            <div class="h-full w-[3px] bg-[#88ff18] absolute top-0 left-0 -translate-x-[0px]">
            </div>
        </div>
        <div v-for="({ user, created_at, text, comment_like_count }, idx) in comment.reply" :key="idx"
            class="ml-[42px] relative my-[5px]  rounded-md ">
            <div class="flex gap-[10px] items-center mx-[10px]">
                <NuxtLink :to="`/${user.username}`">
                    <Avatar :url="user.profile_pic_url" :size="S" />
                </NuxtLink>
                <NuxtLink :to="`/${user.username}`">
                    <p>{{ user.username }}</p>
                </NuxtLink>
                <p class="text-[0.7rem] text-[#666]" :key="key">{{ moment(created_at).fromNow() }}</p>
            </div>
            <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
                <p>{{ text }}</p>
                <div class="flex gap-[10px] mt-[5px] text-[0.8rem]">
                    <div class="flex gap-[3px] text-red-500"><span>{{ comment_like_count }}</span>
                        <span class="cursor-pointer ">Like</span>
                    </div>
                    <p class="cursor-pointer text-red-500   ">Reply</p>
                </div>
            </div>
            <div class="h-full w-[3px] bg-[#e0a0fa] absolute top-0 left-0 -translate-x-[0px]">
            </div>
        </div>
    </div>
</template>


