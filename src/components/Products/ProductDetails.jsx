import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'
import { AddToCardBtn } from '../AddToCardBtn'
import {Reviews} from "./Reviews"

export const ProductDetails = ({product}) => {
  const image = require('../../assets/image/' + product.image).default
  const {isAuthenticated} = useContext(AuthContext)
  const propsLayout = product.props.map((prop, i) => <li className="product-detail-properties-item" key={i}>{prop.type}: {prop.value}</li>)

  return (
    <div className="product-helper">
      <div className="product-detail">
        <img src={image} className="product-detail-image" alt="" />
        <div className="product-detail-panel">
          <div className="product-detail-info">
            <div className="product-detail-name">{product.title}</div>
            <div className="product-detail-price">{product.price}$</div>
          </div>
          <div className="product-detail-title product-detail-description-title">Описание</div>
          <div className="product-detail-description">{product.desc}</div>
          <div className="product-detail-title product-detail-properties-title">Характеристики</div>
          <ul className="product-detail-properties-list">
            {propsLayout}
          </ul>
          <div className="product-detail-footer">
            {isAuthenticated ? <AddToCardBtn product={product}/> : null}
            <NavLink to="/"><button className="btn red">на Главную</button></NavLink>
          </div>
        </div>
      </div>
      <Reviews productId={product.id} />
    </div>
  )
}
