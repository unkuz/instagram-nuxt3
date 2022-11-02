import { snakeToCamel } from "~~/helpers";

export const useFetchCamel = async (url: string) => {

    const { data, ...other } = await useFetch(url)



    return { data: snakeToCamel(data), ...other }
}