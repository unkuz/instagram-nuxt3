import camelcaseKeys from 'camelcase-keys'

/**
 * The function converts snake_case keys in an object to camelCase keys using the camelcaseKeys
 * library.
 * @param {any} value - The `value` parameter is of type `any`, which means it can be any data type
 * (string, number, object, etc.). It is the input value that will be converted from snake_case to
 * camelCase.
 */
export const snakeToCamel = (value: any) => camelcaseKeys(value, { deep: true })
