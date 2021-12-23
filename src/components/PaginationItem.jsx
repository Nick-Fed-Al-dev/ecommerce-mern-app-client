import { useContext } from "react"
import { NativeProductContext } from "../context/NativeProductContext"


export const PaginationItem = ({index}) => {
  const {productPage, setProductPage} = useContext(NativeProductContext)

  const setProductPageHandler = () => setProductPage(index+1)

  return (
    <div onClick={setProductPageHandler} className={"pagination-item" + (productPage === index+1 ? ' pagination-active' : '')}>
      {index+1}
    </div>
  )
}
