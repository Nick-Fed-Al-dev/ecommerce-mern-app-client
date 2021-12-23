import { useContext, useState } from 'react'
import { NativeProductContext } from '../context/NativeProductContext'

export const SortPanel = ({allProducts}) => {
  const {products , sorted, setSorted, setIsSorted, isSorted} = useContext(NativeProductContext) 

  const searchHandler = e => {
    const target = e.target
    target.value.length ? setIsSorted(true) : setIsSorted(false)
    
    const filtred = products.filter(product => product.title.includes(target.value))
    setSorted(filtred)
  }

  return (
    <div className="page-title sort-panel">
      <div className="all-products">Все Товары: {allProducts.length}</div>
      <div className="search">
        <i className="material-icons sort-type">search</i>
        <input placeholder="Search..." onChange={searchHandler}/>
      </div>
    </div>
  )
}
