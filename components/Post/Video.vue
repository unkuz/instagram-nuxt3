<script lang="ts" setup>
import ExpandIcon_ from '@@/assets/svg/full_screen.svg'
import PlayIcon_ from '@@/assets/svg/play_icon.svg'
import { useDoubleClick, usePercentVideo } from '@@/composables'
import { useTimeLineStore } from '@@/store'
import clsx from 'classnames'
import { gsap } from 'gsap'
import { stopOtherVideoPlaying } from '~~/helpers'

interface IProps {
    video: any
    idPost: string
}

const props = defineProps<IProps>()
const timelineStore = useTimeLineStore()
const videoRef = ref<HTMLVideoElement | null>(null)
const containerRef = ref<HTMLVideoElement | null>(null)
const progressBarRef = ref<HTMLDivElement | null>(null)
const isVideoPlay = ref<boolean>(false)
const isFullScreen = ref<boolean>(false)

const togglePlay = () => {
    if (videoRef.value) {
        if (videoRef.value.paused) {
            return play()
        }
        videoRef.value.pause()
    }
}

const toggleLike = () => {
    timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(videoRef, togglePlay, toggleLike)

const { percent } = usePercentVideo(videoRef)

const updateTime = () => {
    if (videoRef.value) {
        isVideoPlay.value = !videoRef.value.paused
    }
}

const play = () => {
   stopOtherVideoPlaying()
    videoRef.value && videoRef.value.play()
}

watch(percent, () => {
    const { clientWidth: widthParent } = progressBarRef.value!.parentElement!
    gsap.to(progressBarRef.value!, {
        width: percent.value * widthParent,
        duration: 0
    })
})

const scrub = (e: MouseEvent) => {
    const scrubTime = (e.offsetX / progressBarRef.value!.parentElement!.offsetWidth) * videoRef.value!!.duration;
    videoRef.value!.currentTime = scrubTime;
}

onMounted(() => {
    videoRef.value!.addEventListener('timeupdate', updateTime)
    progressBarRef.value!.parentElement!.addEventListener('click', scrub)
})

onBeforeUnmount(() => {
    progressBarRef.value!.parentElement!.removeEventListener('click', scrub)
})

const toggleFullScreen = (e: MouseEvent) => {
    e.preventDefault()
    if (document.fullscreenElement) {
        return document.exitFullscreen()
    }
    containerRef.value!.requestFullscreen()
}

onMounted(() => {
    containerRef.value!.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement) {
            isFullScreen.value === true
        }
        else {
            isFullScreen.value === false
        }
    })
})
</script>

<template>
    <div ref="containerRef" class="group relative min-w-full overflow-hidden">
        <video ref="videoRef"  class="video w-full  block bg-black" :src="video.src" type="video/mp4"  
            playsinline crossorigin="anonymous" loop />

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div :class="
                clsx(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100  duration-200',
                    {
                        'scale-0 opacity-0': isVideoPlay,
                    }
                )
            ">
                <PlayIcon_ @click="play" class="!aspect-square !h-[80px] fill-[#cfc3c3c7]" />
            </div>
        </div>
        <div :class="clsx('absolute bottom-0  h-[4px] hover:bg-[#45ff2077] [&>div]:bg-[#5cff1c]  w-full cursor-pointer bg-transparent', {
            'h-[8px] [&>div]:bg-[#1cbfff]': isFullScreen
        })">
            <div ref="progressBarRef" class="h-full w-0"></div>
        </div>
        <div class="absolute bottom-[10px] right-[10px] flex gap-[15px]">
            <div title="Full screen">
                <ExpandIcon_ @click="toggleFullScreen"
                    class="hidden w-[20px] cursor-pointer fill-white text-white group-hover:block" />
            </div>
        </div>
    </div>
</template>
