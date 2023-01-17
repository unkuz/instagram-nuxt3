<script lang="ts" setup>
import ProfileIcon_ from "@@/assets/svg/profile.svg";
import Arrow from "@@/components/Utils/Arrow.vue";
import { useClickOutSide } from "@@/composables";
import { SectionEnum } from "@@/constants";
import { useGlobalStore } from "@@/store";

const globalStore = useGlobalStore();
const accountPopRef = ref<HTMLDivElement | null>(null);

useClickOutSide(accountPopRef, () => {});

const handleSelect = (section: SectionEnum) => {
  globalStore.setSection(section);
};
</script>

<template>
  <div>
    <Arrow />
    <div
      class="shadow-custom absolute -right-[40px] top-[35px] z-20 flex w-[230px] flex-col rounded-md border-[1px] border-c4 bg-c1 text-sm"
    >
      <NuxtLink to="/cuzknothz/">
        <div
          class="z-50 flex h-[37px] cursor-pointer items-center justify-start space-x-[12px] py-[8px] px-[16px] hover:bg-c4"
          @click="handleSelect(SectionEnum.SELF)"
        >
          <ProfileIcon_ />
          <span>Profile</span>
        </div>
      </NuxtLink>
      <hr>
      <NuxtLink to="/login/">
        <div
          class="flex h-[37px] cursor-pointer justify-center px-[16px] py-[8px] hover:bg-c4"
          @click="handleSelect(SectionEnum.SELF)"
        >
          Log out
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
