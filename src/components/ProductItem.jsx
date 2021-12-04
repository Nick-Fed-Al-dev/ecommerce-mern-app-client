import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useNativeUser } from '../hooks/nativeUser.hook'

export const ProductItem = ({product}) => {
  const productImage = require('../assets/image/' + product.image).default
  const {token, id, isAuthenticated} = useContext(AuthContext)
  const {addToCard} = useNativeUser()

  const addToCardHandler = () => {
    addToCard(product.id, id, token)
  }

  return (
    <div id={product.id} className="product-item">
      <img className="product-image" src={productImage} alt="" />
      <div className="product-footer">
        <div className="product-info">
          <strong className="product-info-title">{product.title}</strong>
          <strong className="product-info-price">{product.price + '$'}</strong>
        </div>
        <div className="product-btn-wrapper">
          {isAuthenticated ? <button onClick={addToCardHandler} className="btn green">Add To Card</button> : null}
          <NavLink to={'/detail/' + product.id}><button className="btn blue">Details</button></NavLink>
        </div>
      </div>
    </div>
  )
}
