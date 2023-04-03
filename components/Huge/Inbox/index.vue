<script setup lang="ts">
import DownIcon_ from '@/assets/svg/down_icon_458438i.svg'
import Avatar from '@/components/Atoms/Avatar.vue'
import StatusUser from '@/components/Atoms/StatusUser.vue'
import Search from '@/components/Huge/Inbox/Search/index.vue'
import { SizeAvatarEnum } from '@/type'

enum InboxTypeEnum {
  UnRead,
  Team,
  AllMessages,
}

let leftExpan = $ref<InboxTypeEnum | null>(InboxTypeEnum.UnRead)

const isExpand = (section: InboxTypeEnum) => {
  return leftExpan === section
}

const setExpand = (section: InboxTypeEnum) => {
  if (leftExpan === section) {
    leftExpan = null
  } else {
    leftExpan = section
  }
}
</script>

<template>
  <div class="h-[80vh] min-h-[500px] bg-[#5050505c] p-[20px] pb-0 text-[0.85rem] text-white">
    <div class="flex h-full w-full gap-[20px]">
      <div class="h-[500px] w-[220px]">
        <Search />
        <div class="my-[10px] mb-[30px]">
          <div class="mb-[5px] w-full px-[8px]">
            <div class="flex items-center justify-between" @click="setExpand(InboxTypeEnum.UnRead)">
              <span>Unread</span>
              <span>
                <DownIcon_
                  :class="[
                    'w-[16px] origin-center [&>path]:fill-[#fff]',
                    {
                      'rotate-180': !isExpand(InboxTypeEnum.UnRead),
                    },
                  ]"
                />
              </span>
            </div>
          </div>
          <div v-show="isExpand(InboxTypeEnum.UnRead)">
            <div
              v-for="i in 2"
              class="relative mb-[10px] flex justify-between gap-[10px] rounded-[10px] bg-[#4f4f4f7c] p-[8px] shadow-xl last:mb-0"
            >
              <Avatar :size="SizeAvatarEnum.S" url="/image/91480011.jpg" />
              <div class="flex-1">
                <div class="flex items-center gap-[5px]">
                  <div class="line-clamp-1">underfined</div>
                  <StatusUser :is-active="true" />
                </div>

                <div class="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda,
                  excepturi vel non facere commodi delectus ipsam explicabo quaerat rem aspernatur
                  placeat nobis veritatis quas quibusdam officia illum fugiat voluptatem?
                </div>
              </div>
              <p class="text-[0.7rem]">12:30</p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex-1 overflow-hidden rounded-t-[10px] bg-[#4f4f4f7c] shadow-xl">
        <div class="flex h-[60px] items-center bg-black/60 px-[10px]">
          <Avatar :size="SizeAvatarEnum.S" url="/image/91480011.jpg" />
        </div>
        <div
          class="absolute bottom-[10px] left-1/2 flex h-[40px] w-[90%] -translate-x-1/2 justify-between rounded-[10px] bg-black px-[10px] shadow-xl"
        >
          <!-- <input/> -->
          <input
            class="flex-1 bg-transparent focus:outline-none"
            type="text"
            value="Fantastic? 😂😁😁😀"
          />
          <div class="flex items-center justify-between">
            <div>Emoji</div>
            <div>Attachment</div>
            <div>Picture</div>
            <div>Link</div>
            <div>Send</div>
          </div>
        </div>
      </div>
      <div class="w-[220px]">
        <div class="rounded-[10px] bg-[#5b595b] p-[15px] shadow-xl">
          <div class="flex gap-[5px]">
            <Avatar :size="SizeAvatarEnum.S" url="/image/91480011.jpg" />
            <div>
              <div class="flex items-center gap-[5px]">
                <p class="line-clamp-1">Lorem,</p>
                <StatusUser :is-active="false" />
              </div>
              <div class="line-clamp-1">+39271649815729</div>
            </div>
          </div>
          <div class="mt-[10px] flex justify-between">
            <div class="h-[30px] w-[30px] rounded-[10px] bg-purple-500" />
            <div class="h-[30px] w-[30px] rounded-[10px] bg-purple-500" />
            <div class="h-[30px] w-[30px] rounded-[10px] bg-purple-500" />
            <div class="h-[30px] w-[30px] rounded-[10px] bg-purple-500" />
          </div>
          <p class="mt-[10px] line-clamp-5 text-[0.8rem]">
            <br />
          </p>
        </div>
        <div class="mt-[10px] flex flex-col gap-[10px]">
          <div class="h-[60px] w-full rounded-[10px] bg-gray-400" />
          <div class="h-[60px] w-full rounded-[10px] bg-gray-400" />
          <div class="h-[60px] w-full rounded-[10px] bg-gray-400" />
          <div class="h-[60px] w-full rounded-[10px] bg-gray-400" />
        </div>
      </div>
    </div>
  </div>
</template>
