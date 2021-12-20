import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { UserContext } from "../context/UserContext"


export const CardItemCounter = ({product}) => {
  const {id, token} = useContext(AuthContext)
  const {removeCardProduct, addToCard, setCardProducts} = useContext(UserContext)

  const removeCardProductHandler = async () => {
    const newCard = await removeCardProduct(product.id, id, token)
    setCardProducts(newCard)
  }

  const addCardProductHandler = async () => {
    const newCard = await addToCard(product.id, id, token)
    setCardProducts(newCard)
  }

  return (
    <div className="counter-wrapper">
      <i onClick={removeCardProductHandler} className="material-icons counter-arrow">chevron_left</i>
      <div className="copies-number">{product.copies}</div>
      <i onClick={addCardProductHandler} className="material-icons counter-arrow">chevron_right</i>
    </div>
  )
}
