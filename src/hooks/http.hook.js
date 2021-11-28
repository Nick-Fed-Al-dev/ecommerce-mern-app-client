import { useCallback, useState } from "react"


export const useHttp = () => {
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {

      headers['Content-Type'] = 'application/json'
      if(body) body = JSON.stringify(body)

      const responce = await fetch(url, {method, body, headers})
      const data = await responce.json()
      setLoading(false)
      if(!responce.ok){
        throw new Error(data.message || responce.statusText)
      }

      return data

    } catch (error) {
      setLoading(false)
      setError(error)
      console.log(error)
    }
  }, [])

  const clearError = () => setError(null)

  return {loading, error, clearError, request}
}