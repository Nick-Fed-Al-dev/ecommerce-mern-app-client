import { useCallback } from "react"
import { useHttp } from "./http.hook"

export const useNativeUser = () => {
  const baseUser = 'https://mern-online-shop-project.herokuapp.com/api/user/interact/native/'
  const baseProduct = 'https://mern-online-shop-project.herokuapp.com/api/product/native/'
  const {request, loading} = useHttp()

  const addToCard = useCallback(async (productId, userId, token) => {
    try {
      const product = await request(baseProduct + productId, 'GET', null, {authorization: 'Bearer ' + token})
      const user = await request(baseUser + userId, 'GET', null, {authorization: 'Bearer ' + token})
      await request(baseUser + userId, 'PATCH', {products: [...user.products, product]}, {authorization: 'Bearer ' + token})
      const newCard = [...user.products, product]
      return newCard
    } catch (error) {
      console.log(error)
    }    
  }, [baseProduct, baseUser, request])

  const getCardProducts = useCallback(async (userId, token) => {
    const user = await request(baseUser + userId, 'GET', null, {authorization: 'Bearer ' + token})
    return user.products
  }, [baseUser, request])

  const removeCardProduct = useCallback(async (productId, userId, token) => {
    try {
      const user = await request(baseUser + userId, 'GET', null, {authorization: 'Bearer ' + token})
      const elIndex = user.products.findIndex(el => el._id === productId)
      const newCard = user.products.filter((product, i) => elIndex !== i)
      await request(baseUser + userId, 'PATCH', {products: newCard}, {authorization: 'Bearer ' + token })
      return newCard

    } catch (error) {
      console.log(error)
    }
  }, [baseUser, request])

  return {addToCard, getCardProducts, removeCardProduct, loading}
}