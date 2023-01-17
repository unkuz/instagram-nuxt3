import { useGlobalStore } from "@@/store";
import { ScrollTypeEnum } from "@@/type";

export const useScroll = () => {
  const globalStore = useGlobalStore();
  const oldScrollY = ref(0);

  const controlDirection = () => {
    if (window.scrollY > oldScrollY.value) {
      globalStore.setScroll(ScrollTypeEnum.DOWN);
    } else {
      globalStore.setScroll(ScrollTypeEnum.UP);
    }
    oldScrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", controlDirection);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", controlDirection);
  });
};
