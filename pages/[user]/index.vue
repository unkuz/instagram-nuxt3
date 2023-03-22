<script lang="ts" setup>
import { APP_API } from '@/apis'
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import EditProfile from '@/components/Molecules/EditProfile/index.vue'
import { axios } from '@/services/axios'
import { useProfileStore } from '@/store'
import { SizeAvatarEnum } from '@/type'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const profileStore = useProfileStore()

let showEditProfile = $ref(false)

const { data, pending: pendingTimeline } = await useLazyAsyncData<any>('profile', async () => {
  const res = await axios.get(APP_API.USER.detail, {
    params: {
      user_name: route.params.user,
    },
  })
  return res.data
})

watchEffect(() => {
  profileStore.save(data.value)
})

const profile = $computed(() => profileStore.profile)
</script>

<template>
  <div v-if="!pendingTimeline" class="relative mb-[65px] text-sm">
    <div class="relative">
      <div class="group relative h-[200px] md:h-[250px]">
        <nuxt-img
          class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
          :src="profile?.cover_pic_url"
          :style="{ backgroundImage: `url(${profile?.cover_pic_url})` }"
        />
        <div class="absolute inset-0 hidden bg-black/50 group-hover:block"></div>
      </div>

      <div class="group absolute h-[140px] w-[140px] -translate-y-[100px] translate-x-[20px]">
        <Avatar
          :size="SizeAvatarEnum.L"
          :url="profile?.profile_pic_url"
          class="absolute border-[5px] border-c1 dark:border-c19 md:h-full md:w-full"
        />
        <div class="absolute inset-0 hidden rounded-[50%] bg-black/50 group-hover:block"></div>
      </div>
    </div>
    <div>
      <div class="flex flex-col items-center md:ml-[180px] md:mt-[15px] md:block">
        <TagName :name="profile?.user_name" />
        <AtomsButton text="Edit Profile" @click="showEditProfile = true" />
      </div>
    </div>
    <div class="mt-[20px] flex flex-col items-center justify-center">
      <div>{{ profile?.bio }}</div>
      <div></div>
    </div>
    <div class="mt-[20px] flex justify-around"></div>
    <div class="mt-[20px] grid grid-cols-3 gap-[5px]"></div>
    <EditProfile v-if="showEditProfile" @close="showEditProfile = false" />
  </div>
</template>
