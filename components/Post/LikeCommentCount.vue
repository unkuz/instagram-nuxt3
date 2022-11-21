<script setup lang="ts">

interface IProps {
    likeCount: number;
    commentCount: number
}

defineProps<IProps>()
const emit = defineEmits(['scrollToComment'])

const { format } = Intl.NumberFormat('en', { notation: 'compact' })
const scrollToComment = ()=>{
    emit('scrollToComment')
}

</script>

<template>
    <div class="mb-[5px] flex h-[18px] cursor-pointer gap-[5px] text-[0.85rem]">
        <span class="text-red-400 select-none"><span>{{ format(likeCount) }}</span> <span>likes</span></span>
        <span>|</span>
        <span class="text-fuchsia-400 select-none" @click="scrollToComment">
            <span>{{ format(commentCount) }}</span> <span>comments</span>
        </span>
    </div>
</template>

