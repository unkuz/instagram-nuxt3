<script setup lang="ts">
import Avatar from '@/components/Atoms/Avatar.vue'
import TagName from '@/components/Atoms/TagName.vue'
import { useMagicKeys, useTextareaAutosize } from '@vueuse/core'
import { useKeenSlider } from 'keen-slider/vue.es'
import { BASE_URL_API } from '@/apis'
import { ToastTypeEnum, useAddStore, useAuthStore, useFeedStore, useToastStore } from '@/store'
import { IFilePost, SizeAvatarEnum, TypePostEnum } from '@/type'
import { ADD_SLIDER } from '@/constants'

interface IProps {
  listFile: IFilePost[]
  select: TypePostEnum
}

const props = defineProps<IProps>()

const tagRefs = $ref<HTMLDivElement[]>()
const tags = $ref([''])

const { shift, space, a /* keys you want to monitor */, enter } = useMagicKeys()

watch(enter, (val) => {
  if (val) {
    const elFocus = tagRefs!.find((i) => document.activeElement === i)

    if (elFocus && elFocus?.innerText) {
      tags.push('')
    }
  }
})

const textBtnNext = $computed(() => 'Add to ' + _find(ADD_SLIDER, { section: props.select })?.text)

const addTags = () => {}

let currentIdx = $ref(0)

const { textarea: captionInputRef, input: caption } = useTextareaAutosize()

const callback = (e: any) => {
  currentIdx = e.track.details.abs
}

const authStore = useAuthStore()
const addStore = useAddStore()
const feedStore = useFeedStore()
const toastStore = useToastStore()

const userName = $computed(() => authStore.data.user?.user_name)
const avatar = computed(() => authStore.data.user?.profile_pic_url)

const [sliderRef, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  renderMode: 'precision',
  dragSpeed: 0.1,
  slideChanged: callback,
})

const post = () => {
  if (!caption.value) {
    toastStore.pushTimmer({
      type: ToastTypeEnum.ERROR,
      content: 'Require caption to post',
    })
    return
  }
  addStore.post({
    media: props.listFile,
    caption: caption.value,
    tags: tags,
    typePost: props.select,
  })
}
</script>
<template>
  <div class="flex bg-black md:h-[80vh] md:w-[80vw]">
    <div class="w-[65%]">
      <div class="keen-slider h-full w-full bg-red-200" ref="sliderRef">
        <div
          v-for="(i, idx) in listFile"
          class="keen-slider__slide relative flex items-center justify-center bg-c2"
        >
          <img v-if="i.type === 'image'" :src="i.src" class="h-full w-full object-contain" />
          <video v-else-if="i.type === 'video'" :src="i.src" class="h-full w-full object-contain" />
        </div>
        <AtomsDotIdxCarousel
          class="absolute bottom-[20px] right-1/2 translate-x-1/2"
          :current="currentIdx"
          :media-arr="listFile"
        />
      </div>
    </div>

    <div class="h-full w-[35%] bg-c1 px-[20px]">
      <div class="flex h-[60px] w-full items-center justify-between">
        <div class="flex items-center gap-[10px]">
          <NuxtLink :to="`/${userName}/`">
            <Avatar :size="SizeAvatarEnum.S" :url="avatar"
          /></NuxtLink>
          <TagName :name="userName" class="line-clamp-1" />
        </div>
        <AtomsButton
          @click="post"
          :text="textBtnNext"
          class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
        />
      </div>
      <div>
        <textarea
          ref="captionInputRef"
          v-model="caption"
          class="max-h-[50vh] w-full resize-none text-c2 caret-violet-400 focus:outline-none"
          placeholder="What's on your mind?"
        />
      </div>
      <div></div>
      <div class="flex flex-wrap gap-[10px]">
        <span
          v-for="i in tags"
          ref="tagRefs"
          contenteditable
          class="flex min-w-[20px] items-center justify-center rounded-[5px] border-[1px] border-dashed border-purple-300 px-[10px] focus:outline-none"
        >
          {{ i }}
        </span>
      </div>
    </div>
  </div>
</template>
