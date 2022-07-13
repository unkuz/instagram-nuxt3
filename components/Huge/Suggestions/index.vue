<script lang="ts" setup>
onMounted(() => {
  document.fonts.ready.then(() => {
    console.log('FONT')
  })
})
</script>

<template>
  <div>
    <div class="mt-[18px] mb-[22px] flex h-[56px] items-center justify-between">
      <div class="aspect-square w-[56px] rounded-full bg-red-200 object-cover">
        <img
          crossorigin="anonymous"
          data-testid="user-avatar"
          draggable="false"
          class="rounded-full sm:hover:cursor-pointer"
          src="/image/avatar.jpg"
        />
      </div>
      <div class="-ml-[70px]">
        <p class="font-medium">cuzknothz</p>
        <p class="text-gray-600">cuzknothz</p>
      </div>
      <div class="text-[#1da0f6]">Switch</div>
    </div>

    <!-- suggest for u text -->
    <div class="flex h-[11px] items-center justify-between text-sm text-gray-600">
      <div class="text-gray-600">Suggestions for you</div>
      <div>See All</div>
    </div>
    <!-- list -->
    <div class="mt-[8px] w-full">
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
      <div class="flex h-[48px] items-center justify-between py-[8px]">
        <div class="aspect-square w-[32px] rounded-full bg-red-200 object-cover">
          <img
            crossorigin="anonymous"
            data-testid="user-avatar"
            draggable="false"
            class="rounded-full sm:hover:cursor-pointer"
            src="/image/avatar.jpg"
          />
        </div>
        <div class="-ml-[70px]">
          <p class="font-medium">cuzknothz</p>
          <p class="text-gray-600">Suggested for you</p>
        </div>
        <div class="text-[#1da0f6]">Follow</div>
      </div>
    </div>
    <div class="mt-[10px]">
      <div class="flex justify-center text-gray-600">
        <span class="after:content-['.']">About</span>
        <span class="after:content-['.']">Help</span>
        <span class="after:content-['.']">Press</span>
        <span class="after:content-['.']">API</span>
        <span class="after:content-['.']">Jobs</span>
        <span>Privacy Terms</span>
      </div>
      <div class="mb-[13px] flex justify-center text-gray-600">
        <span class="after:content-['.']">Location</span>
        <span class="after:content-['.']">Top accounts</span>
        <span class="after:content-['.']">Hashtags</span>
        <span>Language</span>
      </div>
    </div>

    <div class="flex flex-col items-center space-y-2 text-gray-500">
      <div>© 2022 Instagram clone by</div>
      <div class="font-august text-[1.2rem] uppercase tracking-wider text-black">Cuzknothz_.</div>
    </div>
  </div>
</template>
