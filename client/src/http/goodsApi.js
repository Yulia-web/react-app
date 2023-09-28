import { $authHost, $host } from "./index";

export const createType = async(type) => {
  const {data} = await $host.post('api/type', type)
  return data
}

export const fetchType = async() => {
  const {data} = await $host.get('api/type')
  return data
}

export const createBrand = async (brand) => {
  const {data} = await $host.post('api/brand', brand)
  return data
}

export const fetchBrand = async() => {
  const {data} = await $host.get('api/brand')
  return data
}

export const createCategory = async(category) => {
  const {data} = await $host.post('api/category', category)
  return data
}

export const fetchCategory = async() => {
  const {data} = await $host.get('api/category')
  return data
}

export const createGoods = async(name) => {
  const {data} = await $host.post('api/goods', name)
  return data
}

export const fetchGoods = async() => {
  const {data} = await $host.get('api/goods')
  return data
}

export const fetchOneGoods = async (id) => {
  const {data} = await $host.get('api/goods/' + id)
  return data
}