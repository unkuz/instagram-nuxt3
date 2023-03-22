<script setup lang="ts">
import Avatar from '~~/components/Atoms/Avatar.vue'
import { useProfileStore } from '~~/store'
import { SizeAvatarEnum } from '~~/type'

const profileStore = useProfileStore()

const profile = $computed(() => profileStore.profile)
</script>
<template></template>
