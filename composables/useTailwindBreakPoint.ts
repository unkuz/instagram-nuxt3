import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useTailwindBreakPoint = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const largeSm = breakpoints.greater('sm')
  const smallMd = breakpoints.smallerOrEqual('md')
  const largeMd = breakpoints.greater('md')

  return { largeSm, smallMd, largeMd }
}
