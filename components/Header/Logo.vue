<script lang="ts" setup>
import { ROUTES } from '~~/constants/routes'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'

const globalStore = useGlobalStore()
const router = useRouter()

const handleSelect = (section: SECTION, url?: string) => {
  useDebounceRoute(url, router)
  globalStore.setSection(section)
}
</script>

<template>
  <img
    alt="Instagram"
    @click="handleSelect(SECTION.HOME, '/')"
    class="mt-[7px] h-[29px] cursor-pointer select-none"
    draggable="false"
    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
  />
</template>
