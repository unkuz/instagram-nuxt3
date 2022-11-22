<script lang="ts" setup>
import Avatar from '@@/components/Tiny/Avatar.vue'
import Button from '@@/components/Tiny/Button.vue'
import { SizeAvatarEnum } from '@@/type'

const { S } = SizeAvatarEnum

interface IProps {
    avatar: string
    name: string
    id: string
}

defineProps<IProps>()

const isFollow = ref<boolean>(false)
const toggleFollow = () => (isFollow.value = !isFollow.value)

</script>

<template>
    <div class="flex h-[48px] items-center justify-between py-[8px]">

        <NuxtLink :to="`/${id}`">
            <Avatar :size="S" :url="avatar" />
        </NuxtLink>

        <div class="w-[185px]">
            <NuxtLink :to="`/${id}`">
                <p class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                    {{ name }}
                </p>
            </NuxtLink>
            <p class="text-[0.8rem] text-gray-600">Suggested for you</p>
        </div>
        <div class="flex w-[55px] cursor-pointer justify-end text-[0.8rem] font-[500]" @click="toggleFollow">
            <Button v-if="isFollow" text="Unfollow" className="[&>span]:text-[#ff48a3] bg-[#fae1da]" />
            <Button v-else text="Follow" className="[&>span]:text-[#1da0f6] bg-[#dff1fc]" />
        </div>
    </div>
</template>
