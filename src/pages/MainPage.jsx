import { useCallback, useEffect, useState } from "react"
import { Navbar } from "../components/Navigation/Navbar"
import { Pagination } from "../components/Navigation/Pagination"
import { ProductList } from "../components/Products/ProductList"
import { SortPanel } from "../components/Navigation/SortPanel"
import { ProductContext } from "../context/ProductContext"
import { useProduct } from "../hooks/product.hook"

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
    <ProductContext.Provider value={{
      products, sorted, setSorted, loading, productPage, setProductPage, isSorted, setIsSorted, allProducts: productType ? products : allProducts, isNotFound, setIsNotFound
    }}>
    <div>
      <Navbar /> 
      <div className="container products-list-wrapper">
        <SortPanel length={isSorted ? sorted.length : productType ? products.length : allProducts.length}/>
        {allProducts.length ? <Pagination products={isSorted ? sorted : productType ? products : allProducts} /> : null}
        <ProductList />
      </div>
    </div>
    </ProductContext.Provider>
  )
}
