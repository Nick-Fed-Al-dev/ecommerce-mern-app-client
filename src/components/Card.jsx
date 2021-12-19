import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { CardItem } from './CardItem'
import { Loader } from './Loader'

export const Card = () => {
  const {cardProducts, loading} = useContext(UserContext)
  const emptyCardImage = require('../assets/image/empty-card.png').default

  const emptyTemplate = (
    <div className="empty-wrapper">
    <img src={emptyCardImage} className="empty-card-img" alt="" />
    </div>
  )

  const cardProductsLayout = cardProducts.length ? 
  cardProducts.map((product, i) => <CardItem key={i} product={{title: product.title, price: product.price, image: product.image, type: product.type, id: product._id}} />)
  :
  loading ?
  <Loader />
  :
  emptyTemplate

  return (
    <ul className="products-list card-list">
      {cardProductsLayout}
    </ul>
  )
}
