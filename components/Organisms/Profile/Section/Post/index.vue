<script setup lang="ts">
import { useFeedUserStore } from '@/store'
import IndividualPost from '@/components/Organisms/Explore/Square.vue'
import { BASE_URL_API } from '@/apis'
import { fixSrc } from '@/utils'

const feedUserStore = useFeedUserStore()
const router = useRouter()

const user_name = router.currentRoute.value?.params?.user

feedUserStore.fetch(user_name)

const list = $computed(() => feedUserStore.data)

onUnmounted(() => feedUserStore.$reset())
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualPost
      v-for="i in list"
      :key="i.id"
      :src="fixSrc(i?.carousel_media?.images?.[0]?.src ?? i?.carousel_media?.videos?.[0]?.src)"
      :comments="i.comments.length"
      :likes="i.likes.length"
    />
  </div>
</template>
