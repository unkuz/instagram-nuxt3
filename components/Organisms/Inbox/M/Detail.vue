<script setup lang="ts">
import { useAuthStore, useInboxDetailStore } from '~~/store'
import Bottom from './Bottom.vue'
import IndividualLine from './IndividualLine.vue'
import Replying from './Replying.vue'

const inboxDetailStore = useInboxDetailStore()
const authStore = useAuthStore()

const containRef = $ref<HTMLDivElement>()
const containListRef = $ref<HTMLDivElement>()

let listMessageObserver: MutationObserver | null = null

const scrollEnd = () => {
  if (containListRef?.lastElementChild) {
    containListRef.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}

onMounted(() => {
  scrollEnd()
  listMessageObserver = new MutationObserver(() => scrollEnd())
  listMessageObserver.observe(containListRef!, {
    childList: true,
    subtree: true,
  })
})

onBeforeUnmount(() => {
  listMessageObserver?.disconnect()
})

const list = $computed(() => inboxDetailStore.dataAfterProcees)
const replying = $computed(() => inboxDetailStore.detail.replying)
const currentUser = $computed(() => authStore.data.userName)
</script>

<template>
  <div class="fck relative h-[calc(100vh)] text-[.8rem] md:h-[calc(100vh-84px)]">
    <div class=" " ref="containRef">
      <div class="absolute top-0">''</div>
      <div
        ref="containListRef"
        class="h-[calc(100vh-60px)] w-full overflow-scroll p-[10px_10px_0px_10px] md:h-[calc(100vh-84px-60px)]"
      >
        <IndividualLine
          v-for="(i, idx) in list"
          :key="idx"
          :isReply="i.user.full_name !== currentUser"
          :content="i.message"
          :sequent="i.sequent"
        />
        <IndividualLine v-if="replying" :isReply="true">
          <template #special>
            <Replying />
          </template>
        </IndividualLine>
      </div>

      <Bottom />
    </div>
  </div>
</template>
<style>
.fck .haha:nth-child(1) {
  background-color: aqua;
}
</style>
