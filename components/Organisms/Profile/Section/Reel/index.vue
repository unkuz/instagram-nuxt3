<script setup lang="ts">
import { useReelUserStore } from '@/store/reel-user'
import IndivudualReel from './IndivudualReel.vue'
import IndividualPost from '@/components/Organisms/Explore/Square.vue'

const reelUserStore = useReelUserStore()
const router = useRouter()

const user_name = router.currentRoute.value?.params?.user

reelUserStore.fetch(user_name)

const list = $computed(() => reelUserStore.data)
onUnmounted(() => reelUserStore.$reset())
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:grid-cols-4 md:gap-[10px]">
    <IndividualPost
      v-for="i in list"
      :key="i.id"
      :src="fixSrc(i.videos[0].src)"
      :comments="i.comments.length"
      :likes="i.likes.length"
      :isReel="true"
    />
  </div>
</template>
