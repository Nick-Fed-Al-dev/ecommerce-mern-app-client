import { CardItemCounter } from './CardItemCounter'
import { DetailBtn } from '../DetailBtn'
 
export const CardItem = ({product}) => {
  const productImage = require('../../assets/image/' + product.image).default

  return (
    <div id={product.id} className="product-item card-item">
      <img className="product-image" src={productImage} alt="" />
      <div className="product-footer">
        <div className="product-info">
          <strong className="product-info-title">{product.title}</strong>
          <strong className="product-info-price">{product.price + '$'}</strong>
        </div>
          <div className="product-btn-wrapper">
          <CardItemCounter product={product}/>
          <DetailBtn product={product} />
        </div>
    </div>
  </div>
  )
}
 