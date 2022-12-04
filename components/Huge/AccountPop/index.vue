<script lang="ts" setup>
import ProfileIcon_ from '@@/assets/svg/profile.svg'
import Arrow from '@@/components/Utils/Arrow.vue'
import { useClickOutSide } from '@@/composables'
import { SECTION } from '@@/constants'
import { useGlobalStore, useThemeStore } from '@@/store'

const globalStore = useGlobalStore()
const accountPopRef = ref<HTMLDivElement | null>(null)
const themeStore = useThemeStore()

const isDarkMode = computed<boolean>(() => themeStore.darkMode)

useClickOutSide(accountPopRef, () => {})

const handleSelect = (section: SECTION) => {
  globalStore.setSection(section)
}

const toggleDarkMode = () => {
  console.log('HEHE')
  themeStore.toggleDarkMode()
}
</script>

<template>
  <div>
    <Arrow />
    <div
      class="shadow-custom absolute -right-[40px] top-[35px] z-20 flex w-[230px] flex-col rounded-md border-[1px] border-c4 bg-c1 text-sm"
    >
      <NuxtLink to="/cuzknothz/">
        <div
          @click="handleSelect(SECTION.SELF)"
          class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] py-[8px] px-[16px] hover:bg-c4"
        >
          <ProfileIcon_ />
          <span>Profile hehe</span>
        </div>
      </NuxtLink>
      <hr />
      <div
        class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] py-[8px] px-[16px] hover:bg-c4"
      >
        <span>Dark mode</span>
        <span @click="toggleDarkMode">
          <div class="relative h-[20px] w-[35px] rounded-[25px] border-[1px] border-c4">
            <div class="absolute aspect-square h-full rounded-[50%] bg-green-400"></div>
          </div>
        </span>
      </div>
      <hr />
      <NuxtLink to="/login/">
        <div
          @click="handleSelect(SECTION.SELF)"
          class="flex h-[37px] cursor-pointer justify-center px-[16px] py-[8px] hover:bg-c4"
        >
          Log out
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
