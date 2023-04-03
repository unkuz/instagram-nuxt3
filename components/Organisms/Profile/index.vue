<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { useProfileStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { isImageOrVideo } from '@/utils'
import { useFileDialog } from '@vueuse/core'
import Section from './Section.vue'

const profileStore = useProfileStore()
const { files: avatarFile, open: openAvatar } = useFileDialog({ multiple: false })
const { files: coverFile, open: openCover } = useFileDialog({ multiple: false })

const profile = $computed(() => profileStore.profile)

let avatarImg = $ref<string>()
let coverImg = $ref<string>()

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
  <div class="relative mb-[65px] min-h-screen text-sm">
    <div class="relative h-[140px] md:h-[200px]">
      <nuxt-img
        v-if="!coverImg"
        class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
        :src="profile?.cover_pic_url"
      />
    </div>
    <div class="-translate-y-[50px]">
      <div
        class="flex w-full flex-col items-center justify-between px-[20px] md:translate-x-0 md:flex-row md:items-end md:gap-[50px]"
      >
        <div class="flex flex-col items-center justify-center gap-[5px]">
          <Avatar
            v-if="!avatarImg"
            :size="SizeAvatarEnum.L"
            :url="profile?.profile_pic_url"
            class="top-0 !h-[120px] !w-[120px] border-[3px] border-c1 dark:border-c19 md:!h-[140px] md:!w-[140px] md:border-[5px]"
          />
          <TagName :name="profile?.user_name" />
        </div>
        <div class="mt-[20px] flex flex-col gap-[10px] md:mt-0">
          <div class="flex justify-between gap-[50px] px-[50px]">
            <Section text="Posts" :count="20" />
            <Section text="Followers" :count="100" />
            <Section text="Following" :count="200" />
          </div>
          <div class="line-clamp-3 text-c17 dark:text-c11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque facere pariatur
            perspiciatis, ea suscipit iusto velit soluta, dolores consectetur voluptate perferendis
            quis totam ipsum, dolor dicta autem incidunt quae!
          </div>
        </div>
        <div class="hidden items-center justify-center md:flex md:h-[140px] md:w-[140px]">
          <AtomsButton
            text="Edit"
            class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
          />
        </div>
      </div>
      <div class="mt-[20px]">
        <hr class="border-c4" />
      </div>
    </div>
  </div>
</template>
