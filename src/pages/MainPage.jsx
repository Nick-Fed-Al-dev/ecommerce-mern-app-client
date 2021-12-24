import { useCallback, useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { Pagination } from "../components/Pagination"
import { ProductList } from "../components/ProductList"
import { SortPanel } from "../components/SortPanel"
import { NativeProductContext } from "../context/NativeProductContext"
import { useProduct } from "../hooks/nativeProduct.hook"


export const MainPage = ({productType}) => {
  const {getProducts, loading} = useProduct()
  const [productPage, setProductPage] = useState(1)
  const [products, setProducts] = useState([])
  const [isSorted, setIsSorted] = useState(false)
  const [sorted, setSorted] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [isNotFound, setIsNotFound] = useState(false)

  const getProductsHandler = useCallback(async () => {
    const data = await getProducts(productType, productPage)
    const allProd = await getProducts()
    
    setProducts(data)
    setSorted(data)
    setAllProducts(allProd)
    
  }, [getProducts, productPage, productType])

  useEffect(() => {
    getProductsHandler()
  }, [getProductsHandler])

  return (
    <NativeProductContext.Provider value={{
      products, sorted, setSorted, loading, productPage, setProductPage, isSorted, setIsSorted, allProducts, isNotFound, setIsNotFound
    }}>
    <div>
      <Navbar /> 
      <div className="container products-list-wrapper">
        <SortPanel length={isSorted ? sorted.length : allProducts.length}/>
        {allProducts.length ? <Pagination products={isSorted ? sorted : allProducts} /> : null}
        <ProductList />
      </div>
    </div>
    </NativeProductContext.Provider>
  )
}
