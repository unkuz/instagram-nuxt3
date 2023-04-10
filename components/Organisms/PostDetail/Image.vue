<script lang="ts" setup>
import { useDoubleClick } from '@/composables'
import { useFeedStore } from '@/store'

interface IProps {
  src: string
  id: number
}

const props = defineProps<IProps>()

const timelineStore = useFeedStore()
const imageRef = ref<HTMLImageElement | null>(null)

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(imageRef, () => {}, toggleLike)
</script>

<template>
  <div class="min-w-full">
    <nuxt-img
      ref="imageRef"
      class="max-h-[60vh] min-h-full min-w-full bg-c2 object-contain"
      draggable="false"
      :src="src"
      alt=""
      loading="lazy"
    />
  </div>
</template>
