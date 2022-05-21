<script lang="ts" setup>
const haha = () => {}
</script>

<template>
  <div class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
    <div class="mx-auto flex w-full flex-col md:w-[348px]">
      <div class="mb-[10px] rounded-lg border-0 border-gray-300 py-[10px] md:border-[1px]">
        <!-- logo -->
        <div class="mx-auto mt-[36px] mb-[12px] h-[51px] w-[175px]">
          <img
            alt="Instagram"
            draggable="false"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </div>
        <div class="mt-[100px]">
          <form
            class="flex flex-col items-center justify-center space-y-[10px]"
            @submit.prevent="haha"
          >
            <input
              type="text"
              class="h-[45px] w-[300px] rounded-lg border-[1px] border-gray-300 focus:border-fuchsia-300 focus:outline-none"
            />
            <input
              type="text"
              class="h-[45px] w-[300px] rounded-lg border-[1px] border-gray-300 focus:border-fuchsia-300 focus:outline-none"
            />
            <input
              class="h-[45px] w-[300px] rounded-lg border-[1px] border-gray-300 bg-sky-300"
              type="submit"
              value="Log in"
            />
          </form>
        </div>
      </div>
      <div
        class="flex h-[63px] items-center justify-center rounded-lg border-0 border-gray-300 text-sm md:border-[1px]"
      >
        <span class="mr-[10px]">Don't have an account?</span>
        <span class="cursor-pointer text-blue-500">Sign up</span>
      </div>
    </div>
  </div>
</template>
