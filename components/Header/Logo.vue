<script lang="ts" setup>
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
  <div
    @click="handleSelect(SECTION.HOME, '/')"
    class="mt-[7px] h-[29px] w-[103px] cursor-pointer select-none bg-cover bg-center"
    :style="{
      backgroundImage: `url(${'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'})`,
    }"
  ></div>
</template>
