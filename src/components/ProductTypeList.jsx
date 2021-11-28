import React, { useContext } from 'react'
import './css/ProductTypesList.css'
import { NativeProductTypeContext } from '../context/NativeProductTypeContext'
import { ProductTypeItem } from './ProductTypeItem'

export const ProductTypeList = () => {
  const {productTypes, loading} = useContext(NativeProductTypeContext)

  const typesListLayout = !loading ? productTypes.map((type, i) => {
    return <ProductTypeItem key={i} type={{image: type.image, title: type.name}}/>
  })
  :
  <div>Loading...</div>

  return (
    <div className="container type-list-wrapper">
      <ul>
        {typesListLayout}
      </ul>
    </div>
  )
}
