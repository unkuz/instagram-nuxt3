<script lang="ts" setup>
import IconBase from "~~/components/Nav/IconBase.vue";
const isSelectSelfAvatar = ref(true);

interface IconProps {
  to?: string;
}
const props = defineProps<IconProps>();
</script>

<template>
  <div>
    <NuxtLink :to="props.to">
      <div
        v-if="isSelectSelfAvatar"
        class="box-content rounded-full bg-black p-[1px] sm:hover:cursor-pointer"
      >
        <div class="rounded-full bg-white p-[1px]">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="aspect-square h-[24px] w-[24px] rounded-full"
            src="/image/avatar.jpg"
          />
        </div>
      </div>
      <img
        v-else
        crossorigin="anonymous"
        data-testid="user-avatar"
        draggable="false"
        class="aspect-square h-[24px] w-[24px] rounded-full sm:hover:cursor-pointer"
        src="/image/avatar.jpg"
      />
    </NuxtLink>
  </div>
</template>
