<script lang="ts" setup>
import { APP_API } from '@/apis'
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import EditProfile from '@/components/Molecules/EditProfile/index.vue'
import { axios } from '@/services/axios'
import { useProfileStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { useFileDialog } from '@vueuse/core'
import { isImageOrVideo } from '@/utils'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const profileStore = useProfileStore()
const { files: avatarFile, open: openAvatar } = useFileDialog({ multiple: false })
const { files: coverFile, open: openCover } = useFileDialog({ multiple: false })

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

let avatarImg = $ref<string>()
let coverImg = $ref<string>()

const changeCover = () => {
  openCover()
}

watch(avatarFile, (val) => {
  if (val) {
    const file = Array.from(val)?.[0]
    const type = isImageOrVideo(file)
    if (type === 'image') {
      avatarImg = URL.createObjectURL(file)
    }
  }
})

watch(coverFile, (val) => {
  if (val) {
    const file = Array.from(val)?.[0]
    const type = isImageOrVideo(file)
    if (type === 'image') {
      coverImg = URL.createObjectURL(file)
    }
  }
})

const changeAvatar = () => {
  openAvatar()
}

onBeforeUnmount(() => {
  ;[avatarImg, coverImg].forEach((i) => {
    URL.revokeObjectURL(i!)
  })
})
</script>

<template>
  <div v-if="!pendingTimeline" class="relative mb-[65px] text-sm">
    <div class="relative">
      <div class="group relative h-[200px] md:h-[250px]">
        <nuxt-img
          v-if="!coverImg"
          class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
          :src="profile?.cover_pic_url"
        />
        <img
          v-else
          :src="coverImg"
          class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
        />
        <div class="absolute inset-0 hidden bg-black/50 group-hover:block">
          <div @click="changeCover">Change</div>
        </div>
      </div>

      <div class="group absolute h-[140px] w-[140px] -translate-y-[100px] translate-x-[20px]">
        <Avatar
          v-if="!avatarImg"
          :size="SizeAvatarEnum.L"
          :url="profile?.profile_pic_url"
          class="absolute h-full w-full border-[5px] border-c1 dark:border-c19"
        />
        <img
          v-else
          :src="avatarImg"
          class="absolute h-full w-full cursor-pointer rounded-[50%] bg-cover bg-center object-cover"
        />
        <div
          @click="changeAvatar"
          class="absolute inset-0 hidden rounded-[50%] bg-black/50 group-hover:block"
        >
          <div></div>
        </div>
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
