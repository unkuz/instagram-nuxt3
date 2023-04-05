/**
 * The function formats a number based on a specified notation using the Intl.NumberFormat method in
 * TypeScript.
 * @param {number | bigint} val - A number or bigint value that needs to be formatted.
 * @param {'compact' | 'standard' | 'scientific' | 'engineering' | undefined} [notation=compact] - The
 * `notation` parameter is an optional parameter that specifies the number notation to use when
 * formatting the number. It can take one of the following values:
 * @returns The function `formatNum` is returning a formatted string representation of the input number
 * or bigint value based on the specified notation. The notation can be one of 'compact', 'standard',
 * 'scientific', 'engineering', or undefined (defaulting to 'compact'). The formatted string is
 * generated using the `Intl.NumberFormat` API with the specified notation and the `format` method is
 * called on it with
 */
export const formatNum = (
  val: number | bigint,
  notation: 'compact' | 'standard' | 'scientific' | 'engineering' | undefined = 'compact'
) => {
  const { format } = Intl.NumberFormat('en', { notation })
  return format(val)
}
