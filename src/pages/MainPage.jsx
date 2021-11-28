import { useCallback, useContext, useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { ProductList } from "../components/ProductList"
import { SortPanel } from "../components/SortPanel"
import { AuthContext } from "../context/AuthContext"
import { NativeProductContext } from "../context/NativeProductContext"
import { useProduct } from "../hooks/nativeProduct.hook"


export const MainPage = ({productType}) => {
  const {getProducts, loading} = useProduct()
  const [products, setProducts] = useState([])
  const [sorted, setSorted] = useState([])
  
  const {token} = useContext(AuthContext)

  const getProductsHandler = useCallback(async () => {
    const data = await getProducts(token, productType)
    setProducts(data)
    setSorted(data)
    
  }, [getProducts, token, productType, setProducts, setSorted])

  useEffect(() => {
    if(!!token){
      getProductsHandler()
    }
  }, [getProductsHandler, token])

  return (
    <NativeProductContext.Provider value={{
      products, sorted, setSorted, loading
    }}>
    <div>
      <Navbar /> 
      <div className="container products-list-wrapper">
        <SortPanel />
        <ProductList />
      </div>
    </div>
    </NativeProductContext.Provider>
  )
}
