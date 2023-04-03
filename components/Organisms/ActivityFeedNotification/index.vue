<script setup lang="ts">
import IndividualNotification from './IndividualNotification.vue'

interface IProps {
  notificationList: any
}

defineProps<IProps>()
</script>
<template>
  <div>
    <IndividualNotification
      v-for="(i, idx) in notificationList"
      :key="idx"
      :content="i.content"
      :created_at="i.created_at"
      :user="i.user"
    />
  </div>
</template>
