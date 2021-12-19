import React, { useContext } from 'react'
import { NativeProductTypeContext } from '../context/NativeProductTypeContext'
import { Loader } from './Loader'
import { ProductTypeItem } from './ProductTypeItem'

export const ProductTypeList = () => {
  const {productTypes, loading} = useContext(NativeProductTypeContext)

  const typesListLayout = !loading ? productTypes.map((type, i) => {
    return <ProductTypeItem key={i} type={{image: type.image, title: type.rus, eng: type.eng}}/>
  })
  :
  <Loader />

  return (
    <ul className="products-list">
      {typesListLayout}
    </ul>
  )
}
