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
  <div class="relative md:h-[calc(100vh-84px)] h-[calc(100vh)] text-[.8rem]">
    <div class=" ">
      <div>''</div>
      <div class="w-full overflow-scroll px-[10px] py-[10px]">
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
