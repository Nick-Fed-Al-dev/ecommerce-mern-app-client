import { useCallback } from "react"
import {production} from "../config"
import { useHttp } from "./http.hook"


export const useNativeProductType = () => {
  const baseUrl = production + '/api/productType/native'
  const {request, loading} = useHttp()

  const getProductTypes = useCallback(async () => {
    try {
      const data = await request(baseUrl)
      return data
    } catch (error) {
      console.log(error)
    }
  }, [baseUrl, request])

  return {getProductTypes, loading}
}