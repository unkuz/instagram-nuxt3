import { Ref } from "vue";

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement | null>) => {
  let percent = $ref(0);

  const updateTime = () => {
    const el = unref(videoRef);

    if (el?.currentTime && el?.duration) {
      percent = el.currentTime / el.duration;
    }
  };

  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.addEventListener("timeupdate", updateTime);
    }
  });

  return $$({ percent });
};
