<script lang="ts" setup>
import Navbarbottom from './navbarbottom.vue'
import Header from '~~/components/Header/index.vue'
import { useGlobalStore } from '~~/store/global'
import { SECTION } from '~~/constants/section'
import { useDebounceRoute } from '~~/composables/useDeboundRoute'
import { useChatStore, STATUS_CHAT } from '~~/store/chat'

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
    <div class="mx-auto mt-[50px] w-full sm:mt-[84px] lg:w-[935px]">
      <slot />
    </div>
    <Navbarbottom v-if="!(isMobile && section === SECTION.MESSENGER)" />
  </div>
</template>
