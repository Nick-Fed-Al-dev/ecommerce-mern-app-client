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

  let presentCard = []

  if (cardProducts.length) {
    let cardProductsCopy = cardProducts.concat()
    presentCard = cardProductsCopy.map(item => {
      const copies = cardProductsCopy.filter(copy => item._id === copy._id)
      
      return copies
    })
    const seen = []
    presentCard = presentCard.filter((item) => {
      return seen.includes(item[0].title) ? false : seen.push(item[0].title)
    })
  }

  const cardProductsLayout = presentCard.length ? 
  presentCard.map((product, i) => <CardItem key={i} product={{title: product[0].title, price: product[0].price, image: product[0].image, type: product[0].type, id: product[0]._id, copies: product.length}} />)
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
