/* The code is defining a constant object `REGEX` with two properties: `url` and `email`. The `url`
property is a regular expression that matches URLs starting with `http://` or `https://`, and the
`email` property is a regular expression that matches email addresses. The `Object.freeze()` method
is used to prevent any modifications to the `REGEX` object. */
export const REGEX = Object.freeze({
  url: /(https?:\/\/[^\s]+)/g,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
})
