import { useCallback } from "react"
import { useHttp } from "./http.hook"


export const useNativeProductType = () => {
  const baseUrl = 'https://mern-online-shop-project.herokuapp.com/api/productType/native'
  const {request, loading} = useHttp()

  const getProductTypes = useCallback(async () => {
    try {
      const data = await request(baseUrl)
      return data
    } catch (error) {
      console.log(error)
    }
  }, [request])

  return {getProductTypes, loading}
}