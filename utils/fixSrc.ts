import { BASE_URL_API } from '@/apis'

export const fixSrc = (src: string) => {
  if (src.startsWith('http')) {
    return src
  }
  return `${BASE_URL_API}${src}`
}
