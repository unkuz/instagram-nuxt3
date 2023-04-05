import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

/**
 * This function uses Tailwind breakpoints to determine the screen size and returns an object with
 * boolean values for different breakpoint conditions.
 * @returns An object with three properties: `largeSm`, `smallMd`, and `largeMd`. These properties are
 * boolean values indicating whether the current screen size is greater than or equal to a certain
 * breakpoint (`largeSm` and `largeMd`) or smaller than a certain breakpoint (`smallMd`). The
 * breakpoints used are defined in the `breakpointsTailwind` object.
 */
export const useTailwindBreakPoint = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const largeSm = breakpoints.greater('sm')
  const smallMd = breakpoints.smallerOrEqual('md')
  const largeMd = breakpoints.greater('md')

  return { largeSm, smallMd, largeMd }
}
