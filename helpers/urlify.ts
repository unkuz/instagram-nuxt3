import { REGEX } from '@/utils'

/**
 * The function `urlify` takes a string and replaces any URLs in it with clickable HTML links.
 * @param {string} text - The input text that needs to be checked for URLs and replaced with HTML
 * links.
 * @returns The function `urlify` is returning a modified version of the input `text` string where any
 * URLs found in the string are replaced with an HTML anchor tag that links to the URL and opens it in
 * a new tab. The regular expression `REGEX.url` is used to match any URLs in the string, and the
 * `replace` method is used to replace each match with the anchor tag.
 */
export const urlify = (text: string) => {
  return text.replace(REGEX.url, (url) => `<a href="${url}" target="_blank">${url}</a>`)
}
