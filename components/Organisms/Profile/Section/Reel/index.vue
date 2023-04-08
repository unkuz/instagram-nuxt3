<script setup lang="ts">
import { useReelUserStore } from '~/store/reel-user'
import IndivudualReel from './IndivudualReel.vue'

const reelUserStore = useReelUserStore()
const router = useRouter()

const user_name = router.currentRoute.value?.params?.user

reelUserStore.fetch(user_name)

const list = $computed(() => reelUserStore.data)
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:grid-cols-4 md:gap-[10px]">
    <IndivudualReel v-for="i in list" :key="i.id" :src="i.videos[0].src" :id="i.id" />
  </div>
</template>
