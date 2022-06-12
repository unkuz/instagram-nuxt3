<script lang="ts" setup>
import Header from '~~/components/Header/index.vue'
import { useDebounceRoute } from '~~/composables/useDeboundRoute'
import { SECTION } from '~~/constants/section'
import { useChatStore } from '~~/store/chat'
import { useGlobalStore } from '~~/store/global'
import Navbarbottom from './navbarbottom.vue'

const globalStore = useGlobalStore()
const chatStore = useChatStore()
const section = computed(() => globalStore.getSection)
const isMobile = computed(() => globalStore.getIsMobile)
const router = useRouter()
const statusChat = computed(() => chatStore.getStatus)
const handleSelect = (section: SECTION, url: string = '') => {
  useDebounceRoute(url, router)
  globalStore.setSection(section)
}
</script>

<template>
  <div>
    <div
      v-if="isMobile && section === SECTION.MESSENGER"
      class="flex h-[60px] items-center justify-between border-[1px] border-gray-300 bg-white px-[20px]"
    >
      <svg
        class="h-[25px] w-[25px] rotate-180"
        viewBox="0 0 24 24"
        @click="handleSelect(SECTION.HOME, '/')"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </div>
    <Header v-else />
    <div
      class="mx-auto mt-[50px] w-full overflow-hidden sm:mt-[84px] sm:overflow-visible lg:w-[935px]"
    >
      <slot />
    </div>
    <Navbarbottom v-if="!(isMobile && section === SECTION.MESSENGER)" />
  </div>
</template>
