<script lang="ts" setup>
import { useDoubleClick } from '@@/composables'
import { useTimeLineStore } from '@@/store'

interface IProps {
    src: string
    idPost: string
}
const props = defineProps<IProps>()
const imageRef = ref<HTMLImageElement | null>(null)
const timelineStore = useTimeLineStore()

const toggleLike = () => {
    timelineStore.setToggleLike(props.idPost)
}
useDoubleClick(imageRef, () => { }, toggleLike)
</script>

<template>
    <div class="min-w-full">
        <img ref="imageRef" class="min-h-full min-w-full object-contain bg-black max-h-[60vh]" draggable="false"
            :src="src" alt="" />
    </div>
</template>
