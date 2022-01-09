import { Navbar } from "../components/Navigation/Navbar"
import { CategoryList } from "../components/Categories/CategoryList"


export const CatalogPage = () => {
  

  return (
    <div>
      <Navbar />
      <div className="container products-list-wrapper">
        <div className="page-title">Каталог</div>
        <CategoryList />
      </div>
    </div>
  )
}
