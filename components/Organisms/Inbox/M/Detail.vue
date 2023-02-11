<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { SizeAvatarEnum } from '~~/type'
import IndividualLine from './IndividualLine.vue'
import Bottom from './Bottom.vue'
</script>

<template>
  <div>
    <div class="fixed inset-0 text-[.8rem]">
      <div>''</div>
      <div class="px-[10px] w-full h-screen overflow-scroll">
        <IndividualLine :isReply="true" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
        <IndividualLine :isReply="false" />
      </div>

      <Bottom/>
    </div>
  </div>
</template>
