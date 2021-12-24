import React, { useContext } from 'react'
import { NativeProductContext } from '../context/NativeProductContext'
import { Loader } from './Loader'
import { ProductItem } from './ProductItem'

export const ProductList = () => {
  const {sorted, loading, isNotFound} = useContext(NativeProductContext)
  const notFoundImage = require('../assets/image/not-found.png').default

  const productsLayout = !loading ? 
  isNotFound ?
  <img src={notFoundImage} className="not-found-image" alt=""></img>
  :
  sorted.map((product, i) => {
    return <ProductItem key={i} product={{title: product.title, price: product.price, image: product.image, type: product.type, id: product._id}} />
  })
  :
  <Loader />
  return (
    <ul className={'products-list main-product-list' + (isNotFound ? ' is-not-found' : '')}>
      {productsLayout} 
    </ul>
  )
}
