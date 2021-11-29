import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { CardItem } from './CardItem'

export const Card = () => {
  const {cardProducts, loading} = useContext(UserContext)

  const cardProductsLayout = cardProducts.length ? 
  cardProducts.map((product, i) => <CardItem key={i} product={{title: product.title, price: product.price, image: product.image, type: product.type, id: product._id}} />)
  :
  loading ?
  <div>Loading...</div>
  :
  <div>No Products</div>

  return (
    <ul>
      {cardProductsLayout}
    </ul>
  )
}
