<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { useAuthStore, useProfileStore } from '@/store'
import { SizeAvatarEnum } from '@/type'
import { isImageOrVideo } from '@/utils'
import { useFileDialog } from '@vueuse/core'
import Section from './Section.vue'
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import HomeIconSelected_ from '@/assets/svg/home_icon.svg'
import HomeIcon_ from '@/assets/svg/home_icon_selected.svg'
import ReelIcon_ from '@/assets/svg/reel_icon.svg'
import ReelIconSelected_ from '@/assets/svg/reel_icon_selected.svg'
import SaveIcon_ from '@/assets/svg/save_icon.svg'
import { ProfileSectionEnum } from '@/type'
import Post from './Section/Post/index.vue'
import Reel from './Section/Reel/index.vue'
import Saved from './Section/Saved/index.vue'
import Edit from './Edit/index.vue'

const profileStore = useProfileStore()
const authStore = useAuthStore()
const { files: avatarFile, open: openAvatar } = useFileDialog({ multiple: false })
const { files: coverFile, open: openCover } = useFileDialog({ multiple: false })

const profile = $computed(() => profileStore.data)

const isOpenEditProfile = $computed(() => profileStore.isOpenEditProfile)

const section = $ref(ProfileSectionEnum.POST)

let showEditProfile = $ref(false)

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

const isMyprofile = $computed(() => authStore.data.user.user_name === profileStore?.data?.user_name)
</script>

<template>
  <div class="relative mb-[65px] min-h-screen text-sm md:mb-0">
    <div class="relative h-[140px] md:h-[200px]">
      <NuxtImageCustom
        v-if="!coverImg"
        class="absolute h-full w-full cursor-pointer bg-cover bg-center object-cover"
        :src="profile?.cover_pic_url"
      />
    </div>
    <div class="-translate-y-[50px]">
      <div
        class="flex w-full flex-col items-center justify-between px-[20px] md:translate-x-0 md:flex-row md:items-end md:gap-[20px]"
      >
        <div class="flex flex-col items-center justify-center gap-[5px]">
          <Avatar
            v-if="!avatarImg"
            :size="SizeAvatarEnum.L"
            :url="profile?.profile_pic_url"
            class="top-0 mt-[20px] !h-[120px] !w-[120px] border-[3px] border-c1 dark:border-c19 md:!h-[140px] md:!w-[140px] md:border-[5px]"
          />
          <TagName :name="profile?.user_name" />
          <div class="block md:hidden">
            <AtomsButton
              v-if="isMyprofile"
              text="Edit"
              class="mt-[20px] select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
              @click="profileStore.toggleEditProfile(true)"
            />
            <AtomsButton
              v-else
              text="Follow"
              class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
              @click="profileStore.toggleEditProfile(true)"
            />
          </div>
        </div>
        <div class="mt-[20px] flex flex-col gap-[10px] md:mt-0">
          <div class="flex justify-between gap-[50px] px-[50px]">
            <Section text="Posts" :count="20" />
            <Section text="Followers" :count="100" />
            <Section text="Following" :count="200" />
          </div>
          <div class="line-clamp-3 text-center text-c17 dark:text-c11">
            {{ profile?.bio }}
          </div>
        </div>
        <div class="hidden items-center justify-center md:flex md:h-[140px] md:w-[140px]">
          <AtomsButton
            v-if="isMyprofile"
            text="Edit"
            class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
            @click="profileStore.toggleEditProfile(true)"
          />
          <AtomsButton
            v-else
            text="Follow"
            class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
            @click="profileStore.toggleEditProfile(true)"
          />
        </div>
      </div>
      <div class="mt-[40px]">
        <div>
          <div class="mx-auto w-[80%] md:w-[60%]">
            <hr class="border-c4 dark:border-transparent" />
          </div>

          <div class="flex w-full justify-center gap-[30px] md:gap-[60px]">
            <div
              :class="[
                'mb-[10px] flex w-[50px] justify-center  pt-[10px]',
                {
                  'border-t-[2px] border-c15': section === ProfileSectionEnum.POST,
                },
              ]"
            >
              <HomeIconSelected_
                v-if="section === ProfileSectionEnum.POST"
                class="cursor-pointer fill-c2 dark:fill-c1"
              />
              <HomeIcon_
                v-else
                class="cursor-pointer fill-c2 dark:[&__path]:stroke-c1"
                @click="section = ProfileSectionEnum.POST"
              />
            </div>
            <div
              :class="[
                'mb-[10px] flex w-[50px] items-stretch  justify-center pt-[10px]',
                {
                  'border-t-[2px] border-c15': section === ProfileSectionEnum.REEL,
                },
              ]"
            >
              <ReelIconSelected_
                v-if="section === ProfileSectionEnum.REEL"
                :class="['dark:fill-c1']"
              />
              <ReelIcon_ v-else @click="section = ProfileSectionEnum.REEL" />
            </div>
            <div
              v-if="isMyprofile"
              :class="[
                'mb-[10px] flex w-[50px] justify-center  pt-[10px]',
                {
                  'border-t-[2px] border-c15': section === ProfileSectionEnum.SAVE,
                },
              ]"
            >
              <SaveIcon_
                :class="[
                  ' cursor-pointer dark:[&>path]:stroke-white',
                  {
                    ' [&__path]:fill-c2 dark:[&__path]:fill-c1':
                      section === ProfileSectionEnum.SAVE,
                  },
                ]"
                @click="section = ProfileSectionEnum.SAVE"
              />
            </div>
          </div>
        </div>
        <div class="mt-[10px] w-full">
          <Post v-if="section === ProfileSectionEnum.POST" />
          <Reel v-else-if="section === ProfileSectionEnum.REEL" />
          <Saved v-else-if="isMyprofile && section === ProfileSectionEnum.SAVE" />
        </div>
      </div>
    </div>

    <Edit v-if="isOpenEditProfile" @close="profileStore.toggleEditProfile(false)" />
  </div>
</template>
