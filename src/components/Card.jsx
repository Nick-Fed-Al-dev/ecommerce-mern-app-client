import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/UserContext'
import { useNativeUser } from '../hooks/nativeUser.hook'
import { CardItem } from './CardItem'

export const Card = () => {
  const [cardProducts, setCardProducts] = useState([])
  const {token, id} = useContext(AuthContext)
  const {getCardProducts, loading} = useNativeUser()

  const getCardProductsHandler = useCallback(async () => {
    const products = await getCardProducts(id, token)
    setCardProducts(products)
  }, [getCardProducts, id, token])

  useEffect(() => {
    getCardProductsHandler()
  }, [getCardProductsHandler])

  const cardProductsLayout = cardProducts.length ? 
  cardProducts.map((product, i) => <CardItem key={i} product={{title: product.title, price: product.price, image: product.image, type: product.type, id: product._id}} />)
  :
  loading ?
  <div>Loading...</div>
  :
  <div>No Products</div>

  return (
    <UserContext.Provider value={{
      cardProducts, setCardProducts, loading
    }}>
    <ul>
      {cardProductsLayout}
    </ul>
    </UserContext.Provider>
  )
}
