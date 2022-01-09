import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Loader } from "../components/Loader"
import { Navbar } from "../components/Navigation/Navbar"
import { ProductDetails } from "../components/Products/ProductDetails"
import {useProduct} from '../hooks/product.hook'


export const DetailPage = () => {

  const params = useParams()
  const [product, setProduct] = useState({})
  const {getProduct} = useProduct()
  const getProductHandler = useCallback(async () => {
    const productFetched = await getProduct(params.id)
    setProduct(productFetched)
  }, [getProduct, params.id])

  useEffect(() => {
    getProductHandler()
  }, [getProductHandler])

  const productDetails = product.title ? <ProductDetails product={{
    image: product.image,
    title: product.title,
    price: product.price,
    desc: product.description,
    props: product.properties,
    id: product._id
  }} />
  :
  <Loader />

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="page-title">Подробности</div>
        {productDetails}
      </div>
    </div>
  )
}
