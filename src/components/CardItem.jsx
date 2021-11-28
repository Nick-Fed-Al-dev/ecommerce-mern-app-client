import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/UserContext'
import { useNativeUser } from '../hooks/nativeUser.hook'
 
export const CardItem = ({product}) => {
  const productImage = require('../assets/image/' + product.image).default
  const {token, id} = useContext(AuthContext)
  const {removeCardProduct} = useNativeUser()

  const {setCardProducts} = useContext(UserContext)
  const removeCardProductHandler = async () => {
    const newCard = await removeCardProduct(product.id, id, token)
    setCardProducts(newCard)
    // eslint-disable-next-line no-restricted-globals
    location.reload()
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
        <button onClick={removeCardProductHandler} className="btn red">Remove</button>
        <button className="btn blue"><NavLink to={'/detail/' + product.id}>Details</NavLink></button>
      </div>
    </div>
  </div>
  )
}
 