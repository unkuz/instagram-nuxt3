import { snakeToCamel } from '@/helpers'

/**
 * This function fetches data from a given URL and converts the keys in the response object from
 * snake_case to camelCase.
 * @param {string} url - A string representing the URL to fetch data from.
 * @returns The function `useFetchCamel` is returning an object with the `data` property transformed
 * from snake_case to camelCase using the `snakeToCamel` function, and all other properties from the
 * `useFetch` hook. The exact properties returned depend on the implementation of the `useFetch` hook.
 */
export const useFetchCamel = async (url: string) => {
  const { data, ...other } = await useFetch(url)

  return { data: snakeToCamel(data), ...other }
}
