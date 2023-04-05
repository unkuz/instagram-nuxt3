/**
 * The function returns a reactive state and a toggle function to switch the state between true and
 * false.
 * @param {boolean} initState - initState is the initial state of the toggle. It is a boolean value
 * that determines whether the toggle is initially on or off.
 * @returns An array containing a reactive boolean value and a function to toggle the value.
 */
export function useToggle(initState: boolean) {
  const state = ref<boolean>(initState)

  const toggle = () => (state.value = !state.value)

  return [state, toggle]
}
