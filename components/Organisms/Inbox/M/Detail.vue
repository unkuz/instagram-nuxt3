<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '~~/type'
import IndividualLine from './IndividualLine.vue'
import Bottom from './Bottom.vue'
import { useAuthStore, useInboxDetailStore } from '~~/store'

const inboxDetailStore = useInboxDetailStore()
const authStore = useAuthStore()

const list = $computed(() => inboxDetailStore.data)
const currentUser = $computed(() => authStore.data.userName)
</script>

<template>
  <div class="relative h-[calc(100vh)] text-[.8rem] md:h-[calc(100vh-84px)]">
    <div class=" ">
      <div class="absolute top-0">''</div>
      <div
        class="h-[calc(100vh-60px)] w-full overflow-scroll px-[10px] py-[10px] md:h-[calc(100vh-84px-60px)]"
      >
        <IndividualLine
          v-for="(i, idx) in list"
          :key="idx"
          :isReply="i.user.full_name !== currentUser"
          :content="i.message"
        />
      </div>

      <Bottom />
    </div>
  </div>
</template>
