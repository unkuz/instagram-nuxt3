import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useTailwindBreakPoint = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const largeSm = breakpoints.greater('sm')

  return { largeSm }
}
