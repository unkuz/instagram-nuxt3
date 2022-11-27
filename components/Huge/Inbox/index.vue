<script setup lang="ts">
import Search from '@@/components/Huge/Inbox/Search/index.vue';
import DownIcon_ from '@@/assets/svg/down_icon_458438i.svg';
import clsx from 'classnames';
import Avatar from '@@/components/Atom/Avatar.vue';
import { SizeAvatarEnum } from '@@/type'
import StatusUser from '@@/components/Atom/StatusUser.vue';


const { S, T, M } = SizeAvatarEnum


enum InboxTypeEnum {
    UnRead,
    Team,
    AllMessages
}

const leftExpan = ref<InboxTypeEnum | null>(InboxTypeEnum.UnRead)

const isExpand = (section: InboxTypeEnum) => {
    return leftExpan.value === section
}

const setExpand = (section: InboxTypeEnum) => {
    if (leftExpan.value === section) {
        leftExpan.value = null
    }
    else {
        leftExpan.value = section
    }
}
</script>

<template>
    <div class=" text-[0.85rem] text-white  h-[80vh] min-h-[500px] p-[20px] pb-0 bg-[#5050505c]">
        <div class="flex w-full h-full gap-[20px]">
            <div class="w-[220px] h-[500px] ">
                <Search />
                <div class="my-[10px] mb-[30px]">
                    <div class="w-full px-[8px] mb-[5px]">
                        <div class="flex justify-between items-center" @click="setExpand(InboxTypeEnum.UnRead)">
                            <span>Unread</span>
                            <span>
                                <DownIcon_ :class="clsx('w-[16px] origin-center [&>path]:fill-[#fff]', {
                                    'rotate-180-css': !isExpand(InboxTypeEnum.UnRead)
                                })" />
                            </span>
                        </div>
                    </div>
                    <div v-show="isExpand(InboxTypeEnum.UnRead)">
                        <div v-for="i in 2"
                            class="bg-[#4f4f4f7c] shadow-xl relative flex justify-between gap-[10px] p-[8px] rounded-[10px] mb-[10px] last:mb-0">
                            <Avatar :size="S" url="/image/91480011.jpg" />
                            <div class="flex-1">
                                <div class="flex items-center gap-[5px]">
                                    <div class="line-clamp-1">underfined</div>
                                    <StatusUser :isActive="true" />
                                </div>

                                <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                    assumenda, excepturi vel non facere commodi delectus ipsam explicabo quaerat rem
                                    aspernatur placeat nobis veritatis quas quibusdam officia illum fugiat voluptatem?
                                </div>
                            </div>
                            <p class="text-[0.7rem]">12:30</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 bg-[#4f4f4f7c] rounded-t-[10px] overflow-hidden relative shadow-xl">
                <div class="h-[60px] bg-black/60 px-[10px] flex items-center">
                    <Avatar :size="S" url="/image/91480011.jpg" />
                </div>
                <div
                    class="absolute shadow-xl bottom-[10px] w-[90%] h-[40px] px-[10px] bg-black rounded-[10px] flex justify-between left-1/2 -translate-x-1/2">
                    <!-- <input/> -->
                    <input class="flex-1 bg-transparent focus:outline-none" type="text" value="Fantastic? 😂😁😁😀" />
                    <div class="flex justify-between items-center">
                        <div>Emoji</div>
                        <div>Attachment</div>
                        <div>Picture</div>
                        <div>Link</div>
                        <div>Send</div>
                    </div>

                </div>
            </div>
            <div class="w-[220px]">
                <div class=" bg-[#5b595b] rounded-[10px] p-[15px] shadow-xl">
                    <div class="flex gap-[5px]">
                        <Avatar :size="S" url="/image/91480011.jpg" />
                        <div>
                            <div class="flex items-center gap-[5px]">
                                <p class="line-clamp-1">Lorem, </p>
                                <StatusUser :isActive='false' />
                            </div>
                            <div class="line-clamp-1">+39271649815729</div>
                        </div>

                    </div>
                    <div class="flex justify-between mt-[10px]">
                        <div class="h-[30px] w-[30px] bg-purple-500 rounded-[10px]"></div>
                        <div class="h-[30px] w-[30px] bg-purple-500 rounded-[10px]"></div>
                        <div class="h-[30px] w-[30px] bg-purple-500 rounded-[10px]"></div>
                        <div class="h-[30px] w-[30px] bg-purple-500 rounded-[10px]"></div>
                    </div>
                    <p class="line-clamp-5 mt-[10px] text-[0.8rem]">Hello everybody !🍕🍕🍕 <br />
                        Our company looking JavaScript Developer</p>
                </div>
                <div class="mt-[10px] flex flex-col gap-[10px]">
                    <div class="w-full h-[60px] rounded-[10px] bg-gray-400"></div>
                    <div class="w-full h-[60px] rounded-[10px] bg-gray-400"></div>
                    <div class="w-full h-[60px] rounded-[10px] bg-gray-400"></div>
                    <div class="w-full h-[60px] rounded-[10px] bg-gray-400"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.rotate-180-css {
    rotate: 180deg;
}
</style>
