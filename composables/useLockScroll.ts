export function useLockScroll() {
  let originalStyle = "";
  onBeforeMount(() => {
    originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
  });
  onUnmounted(() => {
    document.body.style.overflow = originalStyle;
  });
}
