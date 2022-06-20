<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})
</script>

<template>
  <div class="grid h-[500px] w-full grid-cols-3 gap-[2px] md:gap-[28px]">
    <div class="group relative aspect-square cursor-pointer overflow-hidden">
      <img
        class="aspect-square w-full object-cover"
        src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg"
      />
      <svg
        aria-label="Carousel"
        class="absolute top-[15px] right-[15px]"
        color="#ffffff"
        fill="#ffffff"
        height="28"
        role="img"
        viewBox="0 0 48 48"
        width="28"
      >
        <path
          d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"
        ></path>
      </svg>
      <div class="absolute inset-0 z-10 opacity-30 group-hover:bg-black"></div>
    </div>

    <div class="relative aspect-square md:col-start-1 md:row-start-2">
      <img
        class="aspect-square w-full object-cover"
        src="/explore/278009228_960257008015789_1126924171986179644_n.jpg"
      />
      <svg
        aria-label="Video"
        class="absolute top-[15px] right-[15px]"
        color="#ffffff"
        fill="#ffffff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"
        ></path>
      </svg>
    </div>
    <div
      class="relative col-start-3 row-span-2 row-start-1 object-cover md:col-span-2 md:col-start-2"
    >
      <img
        class="aspect-auto h-full w-full object-cover md:aspect-square"
        src="/explore/275624700_382008663748898_3572544032225631298_n.jpg"
      />

      <svg
        aria-label="Clip"
        class="absolute top-[15px] right-[15px]"
        color="#ffffff"
        fill="#ffffff"
        height="18"
        role="img"
        viewBox="0 0 24 24"
        width="18"
      >
        <path
          d="M12.823 1l2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 011.596 2.82l.07.295h-4.629L15.15 1zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 013.942-4.53zm9.735 12.834l-4.545-2.624a.909.909 0 00-1.356.668l-.008.12v5.248a.91.91 0 001.255.84l.109-.053 4.545-2.624a.909.909 0 00.1-1.507l-.1-.068-4.545-2.624zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <!-- <svg
        aria-label="Video"
        class="absolute top-[15px] right-[15px]"
        color="#ffffff"
        fill="#ffffff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"
        ></path>
      </svg> -->
    </div>

    <div class="aspect-square">
      <img
        class="aspect-square w-full object-cover"
        src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg"
      />
    </div>
    <div class="aspect-square">
      <img
        class="aspect-square w-full object-cover"
        src="/explore/275624700_382008663748898_3572544032225631298_n.jpg"
      />
    </div>
    <div class="aspect-square">
      <img
        class="aspect-auto w-full object-cover md:aspect-square"
        src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg"
      />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/278009228_960257008015789_1126924171986179644_n.jpg" />
    </div>
    <!-- line -->
    <div class="aspect-square w-full md:col-span-2 md:row-span-2">
      <img src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg" />
    </div>

    <div class="aspect-square w-full">
      <img src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg" />
    </div>
    <div class="row-span-2 w-full md:row-span-1 md:aspect-square">
      <img
        class="h-full object-cover md:h-auto"
        src="/explore/269745549_1653199611678007_2927572044521418605_n.jpg"
      />
    </div>

    <div class="aspect-square w-full">
      <img src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/278009228_960257008015789_1126924171986179644_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/275624700_382008663748898_3572544032225631298_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/280053464_1025075078373353_2175908518960908191_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/275624700_382008663748898_3572544032225631298_n.jpg" />
    </div>
    <div class="aspect-square w-full">
      <img src="/explore/275624700_382008663748898_3572544032225631298_n.jpg" />
    </div>
  </div>
</template>
