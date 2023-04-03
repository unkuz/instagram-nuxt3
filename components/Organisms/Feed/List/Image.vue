<script lang="ts" setup>
import { useDoubleClick } from '@/composables'
import { useFeedStore } from '@/store'
import { BASE_URL_API } from '@/apis'

interface IProps {
  src: string
  idPost: number
}

const props = defineProps<IProps>()

const timelineStore = useFeedStore()
const imageRef = ref<HTMLDivElement | null>(null)

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

// useDoubleClick(imageRef, () => {}, toggleLike)

onMounted(() => {
  console.log('imageRef', imageRef.value?.children)
})

const hehe = () => {
  console.log('HEHE', imageRef.value)
}
</script>

<template>
  <div class="keen-slider__slide min-w-full">
    <nuxt-img
      @click="hehe"
      ref="imageRef"
      class="max-h-[60vh] min-h-full min-w-full bg-c2 object-contain"
      draggable="false"
      :src="BASE_URL_API + src"
      alt=""
    />
  </div>
</template>
