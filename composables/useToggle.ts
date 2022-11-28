export function useToggle(initState: boolean) {
  const state = ref<boolean>(initState)

  const toggle = () => {
    state.value = !state.value
  }

  return [state, toggle]
}
