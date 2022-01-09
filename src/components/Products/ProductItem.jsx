import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { AddToCardBtn } from '../AddToCardBtn'
import { DetailBtn } from '../DetailBtn'

export const ProductItem = ({product}) => {
  const productImage = require('../../assets/image/' + product.image).default
  const {isAuthenticated} = useContext(AuthContext)

  return (
    <div id={product.id} className="product-item">
      <img className="product-image" src={productImage} alt="" />
      <div className="product-footer">
        <div className="product-info">
          <strong className="product-info-title">{product.title}</strong>
          <strong className="product-info-price">{product.price + '$'}</strong>
        </div>
        <div className="product-btn-wrapper">
          {
           isAuthenticated 
           ?
           <AddToCardBtn product={product}/> 
           : 
           null
           }
          <DetailBtn product={product}/>
        </div>
      </div>
    </div>
  )
}
