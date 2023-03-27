<script lang="ts" setup>
import { useStoriesStore } from '@/store'
import { useKeenSlider } from 'keen-slider/vue.es'
import IndividualUser from './IndividualUser.vue'
import { useInboxListUserStore } from '@/store'

interface IProps {
  keyword: string
}

const props = defineProps<IProps>()

const inboxListUserStore = useInboxListUserStore()
const listUser = computed(() =>
  inboxListUserStore.data.filter((i) => i?.user_name?.includes(props.keyword))
)

const [sliderRef, slider] = useKeenSlider({
  breakpoints: {
    '(min-width: 385px)': {
      slides: {
        perView: 5,
      },
    },
    '(min-width: 310px) and (max-width: 384px)': {
      slides: {
        perView: 4,
      },
    },
    '(min-width: 270px) and (max-width: 309px)': {
      slides: {
        perView: 3.5,
      },
    },
    '(min-width: 0px) and (max-width: 269px)': {
      slides: {
        perView: 3,
      },
    },
  },
  slides: {
    spacing: 0,
  },
  dragSpeed: 1.2,
  renderMode: 'precision',
})

let changeListUserObserver: MutationObserver | null = null

onMounted(() => {
  changeListUserObserver = new MutationObserver(() => slider.value?.update())
  changeListUserObserver.observe(sliderRef.value!, {
    childList: true,
    subtree: true,
  })
})
onBeforeUnmount(() => {
  changeListUserObserver?.disconnect()
})
</script>

<template>
  <div ref="sliderRef" class="keen-slider h-[120px] pt-[20px]">
    <div v-for="i in listUser" :key="i.id" class="keen-slider__slide">
      <IndividualUser v-bind="i" />
    </div>
  </div>
</template>
