export const formatNum = (
  val: number | bigint,
  notation: 'compact' | 'standard' | 'scientific' | 'engineering' | undefined = 'compact'
) => {
  const { format } = Intl.NumberFormat('en', { notation })
  return format(val)
}
