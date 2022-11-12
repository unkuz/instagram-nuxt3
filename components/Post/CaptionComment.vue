<script lang="ts" setup>
import moment from 'moment'
import Button from '../Tiny/Button.vue'
import clsx from 'classnames';

interface IProps {
    like_count: number
    caption_text: string
    comments: any
    created_at: any
    user: any
    tags: any
}

defineProps<IProps>()

const { format } = Intl.NumberFormat('en', { notation: 'compact' })


const randomColor = Math.floor(Math.random() * 16777215).toString(16);

</script>

<template>
    <div>
        <div class="mb-[5px] flex h-[18px] cursor-pointer gap-[5px] text-[0.85rem]">
            <span class="text-red-400"><span>{{ format(like_count) }}</span> <span>likes</span></span>
            <span>|</span>
            <span class="text-fuchsia-400">
                <span>{{ format(comments.length) }}</span> <span>comments</span>
            </span>
        </div>
        <div class="inline-block bg-gray-500 px-[10px] py-[1px] text-white">
            {{ user.username }}
        </div>
        <div class="mt-[5px] bg-gray-100/60 py-[5px]">
            <div>{{ caption_text }}</div>
            <div class="mt-[5px] flex flex-wrap gap-[8px]">
                <NuxtLink :to="`/explore/tags/${i}`" v-for="(i, idx) in tags" :key="idx">
                    <Button :text="`#${i}`" :className="clsx('text-[0.8rem] !px-[7px] shadow-md text-white',
                        `!bg-[${randomColor}]`
                    )" />
                </NuxtLink>
            </div>
        </div>

        <div class="m-[8px_0px_5px_0px] h-[18px] text-[0.8rem] text-gray-400">
            {{ moment(created_at).fromNow() }}
        </div>
    </div>
</template>
