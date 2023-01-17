import camelcaseKeys from 'camelcase-keys'

export const snakeToCamel = (value: any) => camelcaseKeys(value, { deep: true })
