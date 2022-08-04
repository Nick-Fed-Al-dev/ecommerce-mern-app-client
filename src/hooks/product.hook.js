import { useCallback } from "react"
import { useHttp } from "./http.hook"

export const useProduct = () => {
  const baseUrl = 'https://ecommerce-mern-app-server.herokuapp.com/api/product/native'
  const {request, loading} = useHttp()

  const getProducts = useCallback(async (type, page) => {
    try {
      const data = await request(baseUrl + `?category=${type}&page=${page}`)
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex

        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
        }
      
        return array
      }
      return shuffle(data)
    } catch (error) {
      console.log(error)
    }
  }, [request])

  const getProduct = useCallback(async (id) => {
    try {
      const data = await request(baseUrl + '/' + id)
      return data
    } catch (error) { 
      console.log(error)
    }
  }, [request])


  return {getProducts, getProduct, loading}
}