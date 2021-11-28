import { useCallback } from "react"
import { useHttp } from "./http.hook"


export const useNativeProductType = () => {
  const baseUrl = 'http://localhost:3030/api/productType/native'
  const {request, loading} = useHttp()

  const getProductTypes = useCallback(async token => {
    try {
      const data = await request(baseUrl, 'GET', null, {authorization: 'Bearer ' + token})
      return data
    } catch (error) {
      console.log(error)
    }
  }, [request])

  return {getProductTypes, loading}
}