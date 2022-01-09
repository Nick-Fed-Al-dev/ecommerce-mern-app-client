import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import { Loader } from '../Loader'
import { CategoryItem } from './CategoryItem'

export const CategoryList = () => {
  const {productTypes, loading} = useContext(CategoryContext)

  const typesListLayout = !loading ? productTypes.map((type, i) => {
    return <CategoryItem key={i} type={{image: type.image, title: type.rus, eng: type.eng}}/>
  })
  :
  <Loader />

  return (
    <ul className="products-list">
      {typesListLayout}
    </ul>
  )
}
