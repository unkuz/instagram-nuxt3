export function useToggle(initState: boolean) {
  const state = ref(initState)

  const toggle = () => {
    state.value = !state.value
  }
  
  return [state, toggle]
}
