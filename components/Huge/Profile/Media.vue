<script lang="ts" setup>
import { useProfileStore } from '@/store'
import { SELECT_TYPE } from '@/constants/screens/account'

const profileStore = useProfileStore()
const currentSelect = computed<SELECT_TYPE>(() => profileStore.select)

watch(currentSelect, () => {})
</script>

<template>
  <div class="grid grid-cols-3 gap-[5px]">
    <nuxt-img
      src="/personal/284244344_5311122635605193_5864440318105391567_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/271827299_648555502866475_6120779624187626708_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/286080936_5042279369231267_5247065737773824167_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/286156153_1180787169352168_8777747362582813059_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/285912787_394288332653847_7603823348223049999_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/286080936_5042279369231267_5247065737773824167_n.jpg"
      class="aspect-square w-full object-cover"
    />
    <nuxt-img
      src="/personal/286156153_1180787169352168_8777747362582813059_n.jpg"
      class="aspect-square w-full object-cover"
    />
  </div>
</template>
