<script lang="ts" setup>
import ProfileIcon_ from '@/assets/svg/profile.svg'
import Arrow from '@/components/Utils/Arrow.vue'
import { SectionEnum } from '@/constants'
import { useAuthStore, useGlobalStore } from '@/store'
import { onClickOutside } from '@vueuse/core'

const globalStore = useGlobalStore()
const accountPopRef = ref<HTMLDivElement>()

const authStore = useAuthStore()

const userName = $computed(() => authStore.data.user?.user_name)

onClickOutside(accountPopRef, () => {})

const handleSelect = (section: SectionEnum) => {
  globalStore.setSection(section)
}

const logout = () => authStore.logout()
</script>

<template>
  <div>
    <Arrow />
    <div
      class="shadow-custom absolute -right-[40px] top-[35px] z-20 flex w-[230px] flex-col rounded-md border-[1px] border-c4 bg-c1 text-sm"
    >
      <NuxtLink :to="`/${userName}/`">
        <div
          class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] px-[16px] py-[8px] hover:bg-c4"
          @click="handleSelect(SectionEnum.SELF)"
        >
          <ProfileIcon_ />
          <span>Profile</span>
        </div>
      </NuxtLink>
      <hr />
      <NuxtLink to="/auth/">
        <div
          class="flex h-[37px] cursor-pointer justify-center px-[16px] py-[8px] hover:bg-c4"
          @click="logout"
        >
          Log out
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
