import { Ref } from "vue";

export const isEllipsisActive = (element: Ref<HTMLElement | null>) => {
  if (element.value && element.value.parentElement) {
    element.value.scrollWidth > element.value.parentElement.scrollWidth;
  }
};
