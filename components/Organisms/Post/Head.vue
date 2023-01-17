<script lang="ts" setup>
import MoreIcon_ from "@@/assets/svg/more_icon.svg";
import { useMoreStore } from "@@/store";
import { SizeAvatarEnum } from "@@/type";
import Avatar from "@@/components/Atoms/Avatar.vue";

const moreStore = useMoreStore();
const { S } = SizeAvatarEnum;

interface IProps {
  avatar: string
  userName: string
}

defineProps<IProps>();

const showMore = () => moreStore.setShow();
</script>

<template>
  <div class="h-[60px]">
    <div class="mx-[16px] flex h-full items-center justify-between">
      <div class="flex items-center space-x-[10px] text-[0.8rem]">
        <Avatar :size="S" :url="avatar" />
        <div
          class="cursor-pointer bg-c2 px-[10px] py-[1px] text-xs text-c1 dark:bg-c1 dark:text-c2 md:text-sm"
        >
          {{ userName }}
        </div>
      </div>
      <div>
        <MoreIcon_ class="fill-c2 dark:fill-c1" @click.stop="showMore" />
      </div>
    </div>
  </div>
</template>
