import { REGEX } from '@/utils'

/**
 * The function emailify takes a string and replaces any email addresses in it with clickable links.
 * @param {string} text - The input string that needs to be checked for email addresses and replaced
 * with HTML links.
 * @returns The `emailify` function is returning a modified version of the `text` input string where
 * any email addresses found in the string are replaced with an HTML anchor tag that includes a
 * `mailto` link to the email address.
 */
export const emailify = (text: string) => {
  return text.replace(REGEX.email, (email) => `<a href="mailto:${email}">${email}</a>`)
}
