/**
 * The function `sleep` returns a promise that resolves after a specified amount of time (default is
 * 1000 milliseconds).
 * @param [time=1000] - The `time` parameter is a number that represents the amount of time in
 * milliseconds that the `sleep` function will wait before resolving the promise. If no value is
 * provided for `time`, it defaults to 1000 milliseconds (1 second).
 */
export const sleep = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time))
