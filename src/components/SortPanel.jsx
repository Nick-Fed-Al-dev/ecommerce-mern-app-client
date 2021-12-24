import { useContext, useState } from 'react'
import { NativeProductContext } from '../context/NativeProductContext'

export const SortPanel = ({length}) => {
  const {setSorted, setIsSorted, products, allProducts, setIsNotFound} = useContext(NativeProductContext) 
  const [searchText, setSearchText] = useState('')

  const searchTextHandler = e => {
    setSearchText(e.target.value)
  }

  const searchHandler = (e) => {
    const textExists = searchText.length
    textExists ? setIsSorted(true) : setIsSorted(false)
    textExists ? (() => {
      const filtered = allProducts.concat().filter(product => product.title.includes(searchText))
      setSorted(filtered)
      filtered.length ? setIsNotFound(false) : setIsNotFound(true)
    })() : (() => {
      setSorted(products)
      setIsNotFound(false)
    })()
  }

  return (
    <div className="page-title sort-panel">
      <div className="all-products">Все Товары: {length}</div>
      <div className="search">
        <i onClick={searchHandler} className="material-icons sort-type">search</i>
        <input placeholder="Search..." value={searchText} onInput={searchTextHandler} />
      </div>
    </div>
  )
}
