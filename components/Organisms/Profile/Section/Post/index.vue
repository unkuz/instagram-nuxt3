<script setup lang="ts">
import { useFeedUserStore } from '~/store'
import IndividualPost from '@/components/Organisms/Explore/Square.vue'
import { BASE_URL_API } from '@/apis'

const feedUserStore = useFeedUserStore()
const router = useRouter()

console.log('ID', router)

const user_name = router.currentRoute.value?.params?.user

feedUserStore.fetch(user_name)

const list = $computed(() => feedUserStore.data)
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualPost
      v-for="i in list"
      :key="i.id"
      :img="BASE_URL_API + i?.carousel_media?.images?.[0]?.src"
    />
  </div>
</template>
