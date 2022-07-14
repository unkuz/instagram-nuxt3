<script lang="ts" setup>
const options = [
  { name: 'Block' },
  { name: 'Unfollow' },
  { name: 'Report' },
  { name: 'Ignore Friend Recomandation' },
  { name: 'Send Profile To...' },
]
</script>

<template>
  <div class="absolute bottom-0 right-1/2 w-[85%] translate-x-1/2 text-[0.8rem] sm:w-[400px]">
    <div
      class="flex h-[60px] items-center justify-between rounded-[0.8rem] bg-gray-200 px-[20px] sm:px-[30px]"
    >
      <div class="flex items-center space-x-[20px]">
        <div class="aspect-square h-[45px] rounded-[50%] bg-fuchsia-300"></div>
        <div>
          <p>Joe Biden</p>
          <p>View Profile</p>
        </div>
      </div>
      <div class="flex items-center space-x-[20px]">
        <div
          class="flex h-[30px] w-[90px] cursor-pointer items-center justify-center space-x-[5px] rounded-full bg-blue-500 sm:h-[35px] sm:w-[100px]"
        >
          <span>+</span>
          <span>Add</span>
        </div>
        <div>></div>
      </div>
    </div>
    <div class="mt-[10px] overflow-hidden rounded-[0.8rem] bg-slate-100">
      <div
        v-for="(i, idx) in options"
        :key="idx"
        class="flex h-[60px] cursor-pointer items-center border-b-[1px] border-black/10 px-[30px] hover:bg-blue-300"
      >
        {{ i.name }}
      </div>
    </div>
    <div
      class="mt-[10px] flex h-[45px] cursor-pointer items-center justify-center rounded-[0.8rem] bg-gray-200 px-[30px]"
    >
      Done
    </div>
  </div>
</template>
