import { REGEX } from '@@/utils'

export const urlify = (text: string) => {
  return text.replace(REGEX.url, (url) => `<a href="${url}">${url}</a>`)
}
