import { $authHost, $host } from "./index";

export const createBasket = async(goods) => {
  const {data} = await $host.post('api/basket', goods)
  return data
}

export const fetchBasket = async() => {
  const {data} = await $host.get('api/basket')
  return data
}

export const deleteBasket = async(goods) => {
  const {data} = await $host.delete('api/basket', goods)
  return data
}