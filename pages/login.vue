<script lang="ts" setup></script>

<template>
  <div class="flex h-screen w-screen items-center justify-center text-[0.8rem]">
    <div class="flex h-[400px] w-[600px] rounded-2xl border-[1px] border-gray-300">
      <div class="flex-[1]"></div>
      <div class="mx-[20px] h-full w-full flex-[1]">
        <div class="flex h-full flex-[1] flex-col items-center justify-center space-y-[20px]">
          <div
            class="relative h-[50px] w-full overflow-hidden rounded-[15px] border-[1px] border-gray-200"
          >
            <div class="absolute top-[0px] left-[7%] text-[0.8rem]">Username</div>
            <input type="text" class="h-full w-full bg-red-400 opacity-10 focus:outline-none" />
          </div>
          <div class="relative h-[50px] w-full rounded-[15px] border-[1px] border-gray-200">
            <div class="absolute top-[0px] left-[7%] text-[0.8rem]">Password</div>
          </div>
          <div class="flex w-full justify-between space-x-[20px]">
            <div
              class="flex h-[50px] flex-1 items-center justify-center rounded-[15px] border-[1px] border-gray-200"
            >
              <span>Login</span>
            </div>
            <div
              class="flex h-[50px] flex-1 items-center justify-center rounded-[15px] border-[1px] border-gray-200"
            >
              <span>Create Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
