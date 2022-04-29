export function useToggle(init: Boolean) {
  const state = ref(init);

  const toggle = () => {
    state.value = !state.value;
  };

  return [state, toggle];
}
