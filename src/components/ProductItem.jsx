import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useNativeUser } from '../hooks/nativeUser.hook'
import './css/ProductItem.css'

export const ProductItem = ({product}) => {
  const productImage = require('../assets/image/' + product.image).default
  const {token, id} = useContext(AuthContext)
  const {addToCard} = useNativeUser()

  const addToCardHandler = () => {
    addToCard(product.id, id, token)
  }

  return (
    <div id={product.id} className="product-item">
      <img src={productImage} alt="" />
      <div className="product-footer">
        <div className="product-info-wrapper">
          <strong className="products-info-title">{product.title}</strong>
          <strong className="products-info-price">{product.price + '$'}</strong>
        </div>
        <div className="product-footer-btn-wrapper">
          <button onClick={addToCardHandler} className="btn green">Add To Card</button>
          <button className="btn blue"><NavLink to={'/detail/' + product.id}>Details</NavLink></button>
        </div>
      </div>
    </div>
  )
}
