import { useCallback } from "react"
import { useHttp } from "./http.hook"


export const useProduct = () => {
  const baseUrl = 'http://localhost:3030/api/product/native'
  const {request, loading} = useHttp()

  const getProducts = useCallback(async (token, type) => {
    try {
      let data = await request(baseUrl, 'GET', null, {authorization: 'Bearer ' + token})
      if(type) {
        data = data.filter(product => product.type === type)
      }
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      return shuffle(data)
    } catch (error) {
      console.log(error)
    }
  }, [request])

  const getProduct = useCallback(async (token, id) => {
    try {
      const data = await request(baseUrl + '/' + id, 'GET', null, {authorization: 'Bearer ' + token})
      return data
    } catch (error) { 
      console.log(error)
    }
  }, [request])


  return {getProducts, getProduct, loading}
}