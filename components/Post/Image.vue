<script lang="ts" setup>
import { useDoubleClick } from '@@/composables'
import { useTimeLineStore } from '@@/store'

interface IProps {
  src: string
  idPost: string
}
const props = defineProps<IProps>()
const imageRef = ref<HTMLImageElement>(null)
const timelineStore = useTimeLineStore()

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}
useDoubleClick(imageRef, () => {}, toggleLike)
</script>

<template>
  <div class="min-w-full">
    <img
      ref="imageRef"
      class="min-h-full min-w-full object-cover"
      draggable="false"
      :src="src"
      alt=""
    />
  </div>
</template>
