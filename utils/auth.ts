/**
 * The function checks if two given usernames are equal.
 * @param {string} userName - A string representing the username of the user being checked for
 * ownership.
 * @param {string} userNameCompare - The parameter `userNameCompare` is a string that represents the
 * username that we want to compare with the `userName` parameter.
 * @returns The function `isOwner` is returning a boolean value that indicates whether the `userName`
 * parameter is equal to the `userNameCompare` parameter. If they are equal, the function will return
 * `true`, otherwise it will return `false`.
 */
export const isOwner = (userName: string, userNameCompare: string) => {
  return userName === userNameCompare
}
