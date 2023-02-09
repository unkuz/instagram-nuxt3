import { REGEX } from '@@/utils'

export const emailify = (text: string) => {
  return text.replace(REGEX.email, (email) => `<a href="mailto:${email}">${email}</a>`)
}
