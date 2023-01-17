import { Ref } from "vue";

export const useDoubleClick = (
  refElement: Ref<HTMLElement | null>,
  click: () => void,
  dblclick: () => void
) => {
  let timer = ref<any>(null);

  const _click = (event: MouseEvent) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        click();
      }, 200);
    }
  };

  const _dbclick = (event: MouseEvent) => {
    clearTimeout(timer);
    dblclick();
  };

  onMounted(() => {
    if (refElement.value) {
      refElement.value.addEventListener("click", _click);
      refElement.value.addEventListener("dblclick", _dbclick);
    }
  });

  onBeforeUnmount(() => {
    if (refElement.value) {
      refElement.value.removeEventListener("click", _click);
      refElement.value.removeEventListener("dblclick", _dbclick);
    }
  });
};
