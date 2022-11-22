<script setup lang="ts">
import Search from '@@/components/Huge/Inbox/Search/index.vue';
import DownIcon_ from '@@/assets/svg/down_icon_458438i.svg';
import clsx from 'classnames';
import Avatar from '@@/components/Tiny/Avatar.vue';
import { SizeAvatarEnum } from '@@/type'


const { S } = SizeAvatarEnum


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
    <div class=" text-[0.8rem] text-white bg-[#0000004f] h-[600px] p-[20px] pb-0">
        <div class="flex w-full h-full gap-[20px]">
            <div class="w-[250px] h-[500px] ">
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
                            class="bg-[#4f4f4f7c] relative flex justify-between gap-[10px] p-[8px] rounded-[10px] mb-[10px] last:mb-0">
                            <Avatar :size="S" url="/image/91480011.jpg" />
                            <div class="flex-1">
                                <div class="flex items-center gap-[5px]">
                                    <div class="line-clamp-1">underfined</div>
                                    <div class="w-[6px] h-[6px] bg-[#c1ff07] rounded-[50%]"></div>
                                </div>

                                <div class="line-clamp-3">Nếu chưa check radio nào, thì bật popup 申請者をお選びください。
                                </div>
                            </div>
                            <p class="text-[0.7rem]">12:30</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 bg-[#4f4f4f7c] rounded-t-[10px] overflow-hidden">
                <div class="h-[40px] bg-black/60"></div>

            </div>
        </div>
    </div>
</template>


<style lang="css" scoped>
.rotate-180-css {
    rotate: 180deg;
}
</style>
