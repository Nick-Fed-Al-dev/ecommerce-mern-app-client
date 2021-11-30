import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/ProductTypesItem.css'

export const ProductTypeItem = ({type}) => {
  const typeImage = require('../assets/image/' + type.image).default

  return (  
    <div className="type-card">
      <img src={typeImage} alt="" />
      <div className="type-card-footer">
        <div>{type.title}</div>
        <NavLink to={'/catalog/' + type.title.toLowerCase()}>
          <button className="btn blue">
            View
          </button>
        </NavLink>
      </div>
    </div>
  )
}
