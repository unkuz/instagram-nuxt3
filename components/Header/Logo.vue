<script lang="ts" setup>
import { ROUTES } from "~~/constants/routes";
</script>

<template>
  <NuxtLink :to="ROUTES.HOME">
    <img
      alt="Instagram"
      class="mt-[7px] h-[29px] cursor-pointer"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
    />
  </NuxtLink>
</template>
