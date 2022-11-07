<script lang="ts" setup>
import ProfileIcon_ from '@@/assets/svg/profile.svg';
import Arrow from '@@/components/Utils/Arrow.vue';
import { useClickOutSide } from '@@/composables';
import { SECTION } from '@@/constants';
import { useGlobalStore } from '@@/store';

const globalStore = useGlobalStore()
const accountPopRef = ref<HTMLDivElement | null>(null)
const isShow = ref(true)

useClickOutSide(accountPopRef, () => { })

const handleSelect = (section: SECTION) => {
    globalStore.setSection(section)
}
</script>

<template>
    <div ref="accountPopRef" v-if="isShow">
        <Arrow />
        <div
            class="shadow-custom absolute -right-[40px] top-[35px] z-20 flex w-[230px] flex-col rounded-md border-[1px] border-gray-200 bg-white text-sm">
            <NuxtLink to="/cuzknothz/">
                <div @click="handleSelect(SECTION.SELF)"
                    class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] py-[8px] px-[16px] hover:bg-gray-300">
                    <ProfileIcon_ />
                    <span>Profile</span>
                </div>
            </NuxtLink>
            <hr />
            <NuxtLink to='/login/'>
                <div @click="handleSelect(SECTION.SELF)"
                    class="flex h-[37px] cursor-pointer justify-center px-[16px] py-[8px] hover:bg-gray-300">
                    Log out
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
