<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})
</script>

<template>
  <div class="mt-[100px] flex w-full space-x-[30px] text-sm">
    <div
      v-if="false"
      class="w-[300px] flex-none rounded-2xl border-0 border-black bg-white md:border-[1px]"
    >
      <div class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200">
        <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex flex-col">
          <div class="flex w-[215px] justify-between"><span>ฟลุ</span><span>10:00</span></div>

          <span>ซเคิลวีไอ</span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>
      <div class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200">
        <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex flex-col">
          <div class="flex w-[215px] justify-between"><span>ล์โอเลี้</span><span>10:00</span></div>

          <span>สต์เฮาส์ </span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>
      <div class="flex h-[70px] items-center rounded-2xl duration-500 hover:bg-gray-200">
        <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
          <div
            class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
          ></div>
        </div>
        <div class="flex flex-col">
          <div class="flex w-[215px] justify-between"><span>คอนเทนเ</span><span>10:00</span></div>

          <span>ลี่สตริงออดิชั่นพรีเซ็นเตอร์ </span>
        </div>
      </div>
      <div class="mx-auto h-[1px] w-[200px] bg-black"></div>
    </div>
    <div
      class="relative h-[600px] flex-grow rounded-2xl border-0 border-black bg-white p-[5px] md:border-[1px] md:p-[20px]"
    >
      <div>
        <div class="flex">
          <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
            <div
              class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
            ></div>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] py-[10px] md:max-w-[500px]"
              >บึ้มฟลุตออ</span
            >
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >สพุทโธโฮลวีตวืดเปโ</span
            >
          </div>
        </div>
        <div class="mt-[30px] flex flex-col items-end space-y-3">
          <span
            class="flex h-[40px] min-w-[40px] max-w-[260px] items-center justify-end rounded-full bg-fuchsia-400 px-[30px] md:max-w-[500px]"
            >ดี๊กระด๊าโปรเจ็กเตอร์แทงกั๊กรีไซเคิลวีไอพี ส</span
          >
          <span
            class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-fuchsia-400 px-[30px] md:max-w-[500px]"
            >นอิ่มแปร้แฟนซีมอบตั</span
          >
        </div>
        <div class="mt-[30px] flex">
          <div class="relative ml-[10px] mr-[10px] h-[50px] w-[50px] rounded-full bg-yellow-300">
            <div
              class="absolute bottom-[1px] right-[1px] h-[12px] w-[12px] rounded-full bg-green-500"
            ></div>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] flex-none items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >บึ้มฟลุตออ</span
            >
            <span
              class="flex h-[40px] min-w-[40px] max-w-[260px] items-center rounded-full bg-[#f5f7fb] px-[30px] md:max-w-[500px]"
              >สพุทโธโฮลวีตวืดเปโ</span
            >
          </div>
        </div>

        <div
          class="absolute bottom-[20px] h-[55px] w-[calc(100%-60px)] rounded-full border-[1px] border-black"
        ></div>
      </div>
    </div>
  </div>
</template>
