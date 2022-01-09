import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"


export const PaginationItem = ({index}) => {
  const {productPage, setProductPage} = useContext(ProductContext)

  const setProductPageHandler = () => setProductPage(index+1)

  return (
    <div onClick={setProductPageHandler} className={"pagination-item" + (productPage === index+1 ? ' pagination-active' : '')}>
      {index+1}
    </div>
  )
}
