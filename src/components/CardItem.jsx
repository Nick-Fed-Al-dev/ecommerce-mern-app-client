import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/UserContext'
import { useNativeUser } from '../hooks/nativeUser.hook'
import { DetailBtn } from './DetailBtn'
 
export const CardItem = ({product}) => {
  const productImage = require('../assets/image/' + product.image).default
  const {token, id} = useContext(AuthContext)
  const {removeCardProduct} = useNativeUser()

  const {setCardProducts} = useContext(UserContext)

  const removeCardProductHandler = async () => {
    const newCard = await removeCardProduct(product.id, id, token)
    setCardProducts(newCard)
  }

  return (
    <div id={product.id} className="product-item card-item">
      <img className="product-image" src={productImage} alt="" />
      <div className="product-footer">
        <div className="product-info">
          <strong className="product-info-title">{product.title}</strong>
          <strong className="product-info-price">{product.price + '$'}</strong>
        </div>
          <div className="product-btn-wrapper">
          <button onClick={removeCardProductHandler} className="btn red">Убрать</button>
          <DetailBtn product={product} />
        </div>
    </div>
  </div>
  )
}
 