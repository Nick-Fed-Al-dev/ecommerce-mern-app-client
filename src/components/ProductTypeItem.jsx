import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProductTypeItem = ({type}) => {
  const typeImage = require('../assets/image/' + type.image).default

  return (  
    <div className="product-item type-item">
      <img className="product-image" src={typeImage} alt="" />
      <div className="product-footer">
        <div className="type-interact">
          <div className="type-title">{type.title}</div>
            <NavLink to={'/catalog/' + type.title.toLowerCase()}>
              <button className="btn blue">
                View
              </button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}
