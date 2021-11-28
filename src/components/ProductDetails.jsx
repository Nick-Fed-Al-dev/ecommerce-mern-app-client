import { useContext } from 'react'
import './css/ProductDetails.css'
import {useNativeUser} from '../hooks/nativeUser.hook'
import { AuthContext } from '../context/AuthContext'
import { useMessage } from '../hooks/message.hook'

export const ProductDetails = ({product}) => {
  const image = require('../assets/image/' + product.image).default
  const {id, token} = useContext(AuthContext)
  const {addToCard} = useNativeUser()
  const propsLayout = product.props.map((prop, i) => <li className="detail-props-item" key={i}>{prop.type}: {prop.value}</li>)

  const addToCardHandler = () => addToCard(product.id, id, token)

  return (
    <div className="product-details-wrapper">
      <img src={image} className="detail-image" alt="" />
      <div className="title-price-wrapper">
        <div className="detail-name">{product.title}</div>
        <div className="detail-price">{product.price}$</div>
      </div>
      <div className="detail-title detail-desc-title">Description</div>
      <div className="detail-desc">{product.desc}</div>
      <div className="detail-title detail-props-title">Characteristics</div>
      <ul className="detail-props">
        {propsLayout}
      </ul>
      <div className="detail-footer">
        <button onClick={addToCardHandler} className="btn blue add-to-card-btn">Add to Card</button>
      </div>
    </div>
  )
}
