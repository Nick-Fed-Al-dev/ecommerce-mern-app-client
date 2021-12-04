import { useCallback, useContext, useEffect, useState } from "react"
import { Card } from "../components/Card"
import { CardFooter } from "../components/CardFooter"
import { Navbar } from "../components/Navbar"
import { AuthContext } from "../context/AuthContext"
import { UserContext } from "../context/UserContext"
import { useNativeUser } from "../hooks/nativeUser.hook"


export const CardPage = () => {
  const [cardProducts, setCardProducts] = useState([])
  const {token, id} = useContext(AuthContext)
  const {getCardProducts, removeCardProduct, loading} = useNativeUser()
  const [cardTotalPrice, setCardTotalPrice] = useState(0)

  const getCardProductsHandler = useCallback(async () => {
    const products = await getCardProducts(id, token)
    setCardProducts(products)
  }, [getCardProducts, id, token])

  useEffect(() => {
    getCardProductsHandler()
  }, [getCardProductsHandler])

  return (
    <UserContext.Provider value={{
      cardProducts,
      setCardProducts,
      cardTotalPrice,
      setCardTotalPrice,
      getCardProducts,
      removeCardProduct,
      loading
    }}>
    <div>
      <Navbar />
      <div className="container products-list-wrapper">
        <h2 className="page-title">Your Card</h2>
        <Card />
        {cardProducts.length ? <CardFooter /> : null}
      </div>
    </div>
    </UserContext.Provider>
  )
}
