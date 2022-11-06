<script lang="ts" setup>
import { SizeAvatarEnum } from '@@/type'
import Avatar from '../Tiny/Avatar.vue'

const { M } = SizeAvatarEnum

interface IProps {
    name: string
    avatar: string
    id: string
}

defineProps<IProps>()
</script>

<template>
    <NuxtLink :to="`/_/stories/${id}`">
        <div
            class="mx-[8px] inline-block max-w-[74px] select-none overflow-hidden text-ellipsis whitespace-nowrap sm:cursor-pointer">
            <div
                class="mx-auto flex aspect-square h-[66px] w-[66px] flex-col items-center overflow-hidden rounded-[50%] bg-gradient-to-bl from-[#cc00ff] to-[#6fc8f1] p-[3px]">
                <div class="h-full w-full rounded-[50%] bg-white p-[2px]">
                    <Avatar :size="M" :url="avatar" />
                </div>
            </div>
            <p class="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs">
                {{ name }}
            </p>
        </div>
    </NuxtLink>
</template>
