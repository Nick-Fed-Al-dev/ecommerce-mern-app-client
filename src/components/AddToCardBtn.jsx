import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useMessage } from "../hooks/message.hook"
import { useNativeUser } from "../hooks/nativeUser.hook"


export const AddToCardBtn = ({product}) => {

  const {token, id, isAuthenticated} = useContext(AuthContext)
  const {addToCard} = useNativeUser()
  const {message} = useMessage()

  const addToCardHandler = () => {
    addToCard(product.id, id, token)
    message('PRODUCT WAS ADDED TO CART')
  }

  return (
    <>
    {isAuthenticated ? <button onClick={addToCardHandler} className="btn deep-purple accent-3">в корзину</button> : null}
    </>
  )
}
