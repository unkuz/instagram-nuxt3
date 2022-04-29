export function useResizeWindow() {
  const width = ref(0);
  const height = ref(0);
  onMounted(() => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  });

  const resize = (e: any) => {
    width.value = e.target.innerWidth;
    height.value = e.target.innerHeight;
  };
  onMounted(() => {
    window.addEventListener("resize", resize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return [width, height];
}
