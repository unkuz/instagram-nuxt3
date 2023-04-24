<script setup lang="ts">
import { gsap } from 'gsap'
import { useProfileStore } from '@/store'
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import { useFileDialog } from '@vueuse/core'
import { isImageOrVideo } from '@/utils'
import { useLockScroll } from '@/composables'
import Input from '@/components/Atoms/Form/Input.vue'
import TextArea from '@/components/Atoms/Form/TextArea.vue'
import TopBarSm from '@/components/Molecules/TopBarSm.vue'
import CloseIcon_ from '@/assets/svg/mingcute/close.svg'

const emit = defineEmits(['close'])

const profileStore = useProfileStore()

const profile = $computed(() => profileStore.data)

const elRef = $ref<HTMLDivElement>()

const formData = reactive({
  name: '',
  user_name: '',
  bio: '',
  website: '',
  phone_number: '',
})

onMounted(() => {
  Object.assign(formData, profile)
})

onMounted(() => {
  gsap.to(elRef!, {
    translateY: 0,
    ease: 'elastic.out(1, 0.3)',
    duration: 0.3,
  })
})
// useLockScroll()

let avatarImg = $ref<string>()
let coverImg = $ref<string>()

let avatarFileUpload = $ref<File>()
let coverImgUpload = $ref<File>()

const { files: avatarFile, open: openAvatar } = useFileDialog({ multiple: false })
const { files: coverFile, open: openCover } = useFileDialog({ multiple: false })

watch(avatarFile, (val) => {
  if (val) {
    const file = Array.from(val)?.[0]
    const type = isImageOrVideo(file)
    if (type === 'image') {
      avatarImg = URL.createObjectURL(file)
      avatarFileUpload = file
    }
  }
})

watch(coverFile, (val) => {
  if (val) {
    const file = Array.from(val)?.[0]
    const type = isImageOrVideo(file)
    if (type === 'image') {
      coverImg = URL.createObjectURL(file)
      coverImgUpload = file
    }
  }
})

onBeforeUnmount(() => {
  ;[avatarImg, coverImg].forEach((i) => {
    URL.revokeObjectURL(i!)
  })
})

const close = () => emit('close')

const submit = () => {
  profileStore.update({
    ...formData,
    profile_pic_url: avatarFileUpload,
    cover_pic_url: coverImgUpload,
  })
}
</script>
<template>
  <div>
    <UtilsBackDrop @click.self="close">
      <TopBarSm text="Edit Profile" @back="profileStore.toggleEditProfile(false)">
        <AtomsButton
          text="Save"
          class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
          @click="submit"
      /></TopBarSm>
      <div
        ref="elRef"
        class="fixed top-0 h-screen w-full -translate-y-[500%] overflow-scroll bg-c1 dark:bg-c2 md:static md:top-auto md:h-auto lg:w-[935px]"
      >
        <div class="relative my-[20px] hidden w-full justify-center md:flex">
          <div>Edit Profile</div>
          <button class="absolute right-[10px]" @click="close">
            <CloseIcon_ class="h-[20px] w-[20px]" />
          </button>
        </div>
        <div class="h-[140px] w-full md:h-[200px]">
          <NuxtImageCustom
            class="h-full w-full cursor-pointer bg-cover bg-center object-cover"
            :src="coverImg ?? profile?.cover_pic_url"
            @click="openCover"
          />
        </div>
        <div class="w-full px-[20px] py-[20px]">
          <div
            class="mt-[20px] flex -translate-y-[90px] flex-col items-center gap-[20px] md:translate-y-0 md:flex-row md:items-start md:gap-[50px]"
          >
            <div class="h-[120px] w-[120px] md:h-[130px] md:w-[130px]">
              <AtomsAvatar
                class="!h-full !w-full border-[3px] border-c1"
                @click="openAvatar"
                :url="avatarImg ?? profile?.profile_pic_url"
              />
            </div>

            <div class="flex w-full flex-1 flex-col gap-[10px] md:w-auto">
              <div class="flex w-full flex-col justify-between gap-[20px] md:flex-row">
                <div class="flex w-full flex-col">
                  <span class="capitalize">User Name</span>
                  <Input type="text" v-model="formData.user_name" />
                </div>
                <div class="flex w-full flex-col">
                  <span class="capitalize">Name</span>
                  <Input type="text" v-model="formData.name" />
                </div>
              </div>
              <div class="flex w-full flex-col justify-between gap-[20px] md:flex-row">
                <div class="flex w-full flex-col">
                  <span class="capitalize">Phone Number</span>
                  <Input type="text" v-model="formData.phone_number" />
                </div>

                <div class="flex w-full flex-col">
                  <span class="capitalize">Website</span>
                  <Input type="text" v-model="formData.website" />
                </div>
              </div>

              <div class="flex flex-col">
                <span class="capitalize">Bio</span>
                <TextArea v-model="formData.bio" />
              </div>
            </div>
          </div>
          <div class="mt-[20px] hidden justify-center md:flex">
            <AtomsButton
              text="Save"
              class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
              @click="submit"
            />
          </div>
        </div>
      </div>
    </UtilsBackDrop>
  </div>
</template>
