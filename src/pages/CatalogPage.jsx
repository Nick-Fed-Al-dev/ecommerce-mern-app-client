import { Navbar } from "../components/Navbar"
import { ProductTypeList } from "../components/ProductTypeList"


export const CatalogPage = () => {
  

  return (
    <div>
      <Navbar />
      <div className="container products-list-wrapper">
        <div className="page-title">Каталог</div>
        <ProductTypeList />
      </div>
    </div>
  )
}
