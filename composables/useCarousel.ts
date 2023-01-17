import { gsap } from "gsap";
import { useWindowResizeCallback } from "@@/composables";

export const useCarousel = (containerMediaRef: HTMLDivElement | null) => {
  let current = $ref(0);

  const transition = () => {
    if (containerMediaRef) {
      gsap.to(containerMediaRef, {
        translateX: -containerMediaRef.offsetWidth * current,
        duration: 0.2
      });
    }
  };

  useWindowResizeCallback(transition);

  watch(() => current, transition);

  const next = () => {
    if (containerMediaRef) {
      if (current === containerMediaRef.childElementCount - 1) {
        return;
      }
      current++;
    }
  };

  const prev = () => {
    if (current === 0) {
      return;
    }
    current--;
  };

  return { next, prev, current: $$(current) };
};
