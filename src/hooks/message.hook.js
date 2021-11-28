import { useCallback } from "react"


export const useMessage = () => {
  const message = useCallback(text => {
    if(window.M){
      window.M.toast({html: text})
    }
  }, [])

  return {message}
}