import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNativeUser } from "../hooks/nativeUser.hook"


export const AddToCardBtn = ({product}) => {

  const {token, id, isAuthenticated} = useContext(AuthContext)
  const {addToCard} = useNativeUser()

  const addToCardHandler = () => {
    addToCard(product.id, id, token)
  }

  return (
    <>
    {isAuthenticated ? <button onClick={addToCardHandler} className="btn deep-purple accent-3">Добавить в корзину</button> : null}
    </>
  )
}
