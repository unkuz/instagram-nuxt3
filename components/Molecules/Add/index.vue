<script lang="ts" setup>
import BackDrop from '@/components/Utils/BackDrop.vue'
import { useAddStore, useFeedStore } from '@/store'
import { useDropZone, useFileDialog } from '@vueuse/core'
import { isImageOrVideo } from '@/utils'
import { useKeenSlider } from 'keen-slider/vue.es'

const addStore = useAddStore()

const feedStore = useFeedStore()

let allMediaFile = $ref<File[]>([])

const { files, open, reset } = useFileDialog()

const media = $ref<{ type?: string; src?: any }[]>([])
const caption = $ref('')

let isShowInputCaption = $ref(false)

let mediaObserver: MutationObserver | null = null

const [sliderRef, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  renderMode: 'precision',
})

onMounted(() => {
  mediaObserver = new MutationObserver(() => slider.value?.update())
  mediaObserver.observe(sliderRef.value!, {
    childList: true,
    subtree: true,
  })
})
onBeforeUnmount(() => {
  mediaObserver?.disconnect()
})

watch(files, (val) => {
  if (val) {
    const fileList = Array.from(val)
    fileList.forEach((i) => {
      allMediaFile.push(i)
      const type = isImageOrVideo(i)
      if (['image', 'video'].includes(type)) {
        media.push({
          type,
          src: URL.createObjectURL(i),
        })
      }
    })
  }
})

watch(
  () => isShowInputCaption,
  (val) => {
    slider.value?.update()
  },
  {
    flush: 'post',
  }
)

const next = () => {
  isShowInputCaption = true
}

const submit = () => {
  feedStore.addFeed({
    media: allMediaFile,
    caption: caption,
  })
}

const close = () => addStore.toggle(false)
</script>

<template>
  <div>
    <BackDrop @click.self="close">
      <div
        :class="[
          'relative flex h-[600px] w-[500px] bg-white ',
          {
            'w-[800px]': isShowInputCaption,
          },
        ]"
      >
        <svg
          @click="open()"
          class="absolute bottom-[20px] right-[20px] z-10"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>add_circle_line</title>
          <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="System" fill-rule="nonzero">
              <g id="add_circle_line">
                <path
                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                  id="MingCute"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M12,4 C7.58172,4 4,7.58172 4,12 C4,16.4183 7.58172,20 12,20 C16.4183,20 20,16.4183 20,12 C20,7.58172 16.4183,4 12,4 Z M12,7 C12.5523,7 13,7.44771 13,8 L13,11 L16,11 C16.5523,11 17,11.4477 17,12 C17,12.5523 16.5523,13 16,13 L13,13 L13,16 C13,16.5523 12.5523,17 12,17 C11.4477,17 11,16.5523 11,16 L11,13 L8,13 C7.44772,13 7,12.5523 7,12 C7,11.4477 7.44772,11 8,11 L11,11 L11,8 C11,7.44771 11.4477,7 12,7 Z"
                  id="形状结合"
                  fill="#09244BFF"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          v-if="!isShowInputCaption"
          @click="next()"
          class="absolute right-[20px] top-[20px] z-10 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            fill="#956AFFFF"
            fill-rule="evenodd"
            d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"
          ></path>
        </svg>
        <svg
          @click="submit()"
          v-else
          width="24px"
          class="absolute right-[20px] top-[20px] z-10"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>send_line</title>
          <g id="Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Contact" transform="translate(0.000000, -96.000000)">
              <g id="send_line" transform="translate(0.000000, 96.000000)">
                <path
                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z"
                  id="MingCute"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M17.991,6.00909 L5.39886,10.5637 L9.59362,12.9922 L13.293,9.29283 C13.6835,8.90231 14.3167,8.90231 14.7072,9.29283 C15.0977,9.68336 15.0977,10.3165 14.7072,10.707 L11.0078,14.4064 L13.4364,18.6012 L17.991,6.00909 Z M18.3138,3.76552 C19.5093,3.3331 20.667,4.49076 20.2345,5.68629 L14.952,20.2908 C14.5185,21.4895 12.882,21.6354 12.2433,20.5322 L9.02565,14.9744 L3.46786,11.7567 C2.36469,11.1181 2.5105,9.4816 3.70921,9.04802 L18.3138,3.76552 Z"
                  id="形状"
                  fill="#09244BFF"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <div
          ref="sliderRef"
          :class="['keen-slider h-full', isShowInputCaption ? '!w-[500px]' : 'w-full']"
        >
          <div v-for="(i, idx) in media" class="keen-slider__slide h-full w-full">
            <div v-if="i.type === 'image'" class="flex h-full w-full items-center justify-center">
              <img :src="i.src" class="max-h-full max-w-full object-contain" />
            </div>
            <div v-if="i.type === 'video'" class="flex h-full w-full items-center justify-center">
              <video :src="i.src" class="max-h-full max-w-full object-contain" controls />
            </div>
          </div>
        </div>
        <div
          :class="[
            'h-full w-[300px]',
            {
              'hidden w-0': !isShowInputCaption,
            },
          ]"
        >
          <input type="text" v-model="caption" class="mt-[100px] h-[40px] w-full bg-gray-300" />
        </div>
      </div>
    </BackDrop>
  </div>
</template>
