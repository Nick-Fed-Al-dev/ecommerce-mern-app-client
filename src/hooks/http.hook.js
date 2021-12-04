import {useCallback, useEffect, useState} from "react"
import {useMessage} from "./message.hook";


export const useHttp = () => {
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const {message} = useMessage()

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {

      headers['Content-Type'] = 'application/json'
      if(body) body = JSON.stringify(body)

      const responce = await fetch(url, {method, body, headers})
      const data = await responce.json()
      setLoading(false)
      if(!responce.ok){
        throw new Error(JSON.stringify(data) || responce.statusText)
      }

      return data

    } catch (error) {
      setLoading(false)
      setError(JSON.parse(error.message))
    }
  }, [])

  const clearError = () => setError(null)

  useEffect(() => {
    if(error){
      error.errors ? error.errors.forEach(err => message(err.msg)) : message(error.message)
    }
  }, [error])

  return {loading, error, clearError, request}
}