import { useCallback } from "react"
import { useHttp } from "./http.hook"


export const useAdminProductType = token => {
  const baseUrl = '/api/productType/admin'
  const {request} = useHttp()

  const getProductTypes = useCallback(async () => {
    try {
      const data = await request(baseUrl, 'GET', null, {authorization: token})
      return data
    } catch (error) {
      console.log(error)
    }
  }, [request, token])

  const createProductType = useCallback(async () => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }, [])

  const removeProductType = useCallback(async () => {

  }, [])

  return {getProductTypes, createProductType, removeProductType}
}