<script setup lang="ts">
import { gsap } from 'gsap'
import { useProfileStore } from '~/store'
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import { useFileDialog } from '@vueuse/core'
import { isImageOrVideo } from '@/utils'
import { useLockScroll } from '@/composables'

const emit = defineEmits(['close'])

const profileStore = useProfileStore()

const profile = $computed(() => profileStore.data[0])

const elRef = $ref<HTMLDivElement>()

const formData = reactive({
  name: '',
  user_name: '',
  bio: '',
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
useLockScroll()

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
      <div ref="elRef" class="-translate-y-[500%] bg-c1 lg:w-[935px]">
        <div class="relative my-[20px] flex w-full justify-center">
          <div>{{ '<' }}</div>
          <div>Edit Profile</div>
          <button class="absolute right-0" @click="close">x</button>
        </div>
        <div class="h-[140px] w-full md:h-[200px]">
          <NuxtImageCustom
            class="h-full w-full cursor-pointer bg-cover bg-center object-cover"
            :src="coverImg ?? profile?.cover_pic_url"
            @click="openCover"
          />
        </div>
        <div class="mt-[20px] flex gap-[20px]">
          <AtomsAvatar
            class="h-[130px] w-[130px]"
            @click="openAvatar"
            :url="avatarImg ?? profile?.profile_pic_url"
          />
          <div class="flex flex-1 flex-col gap-[10px]">
            <div class="flex flex-col">
              <span class="capitalize">User Name</span>
              <input type="text" v-model="formData.user_name" />
            </div>
            <div class="flex flex-col">
              <span class="capitalize">Name</span>
              <input type="text" v-model="formData.name" />
            </div>
            <div class="flex flex-col">
              <span class="capitalize">Bio</span>
              <input type="text"  v-model="formData.bio" />
            </div>
          </div>
        </div>
        <div class="mt-[20px] flex justify-center">
          <AtomsButton
            text="Submit"
            class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
            @click="submit"
          />
        </div>
      </div>
    </UtilsBackDrop>
  </div>
</template>

