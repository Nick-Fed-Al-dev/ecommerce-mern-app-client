import { useContext } from 'react'
import {useNativeUser} from '../hooks/nativeUser.hook'
import { AuthContext } from '../context/AuthContext'

export const ProductDetails = ({product}) => {
  const image = require('../assets/image/' + product.image).default
  const {id, token, isAuthenticated} = useContext(AuthContext)
  const {addToCard} = useNativeUser()
  const propsLayout = product.props.map((prop, i) => <li className="product-detail-properties-item" key={i}>{prop.type}: {prop.value}</li>)

  const addToCardHandler = () => addToCard(product.id, id, token)

  return (
    <div className="product-detail">
      <img src={image} className="product-detail-image" alt="" />
      <div className="product-detail-info">
        <div className="product-detail-name">{product.title}</div>
        <div className="product-detail-price">{product.price}$</div>
      </div>
      <div className="product-detail-title product-detail-desccription-title">Description</div>
      <div className="product-detail-description">{product.desc}</div>
      <div className="product-detail-title product-detail-properties-title">Characteristics</div>
      <ul className="product-detail-properties-list">
        {propsLayout}
      </ul>
      <div className="product-detail-footer">
        {isAuthenticated ? <button onClick={addToCardHandler} className="btn blue add-to-card-btn">Add to Card</button> : null}
      </div>
    </div>
  )
}
