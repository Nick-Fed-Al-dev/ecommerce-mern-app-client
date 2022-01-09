import { Navbar } from "../components/Navigation/Navbar"
import {ProductDashboard} from "../components/Admin/ProductDashboard";
import {UserDashboard} from "../components/Admin/UserDashboard";
import {CategoryDashboard} from "../components/Admin/CategoryDashboard";
import {AdminSidebar} from "../components/Admin/AdminSidebar";


export const AdminPage = ({page}) => {

  let dashboard

  switch (page){

    case 'Products':
      dashboard = <ProductDashboard />
      break

    case 'Users':
      dashboard = <UserDashboard />
      break

    case 'Categories':
      dashboard = <CategoryDashboard />
      break

    default:
      dashboard = <ProductDashboard/>
  }

  return (
    <div>
      <Navbar />
      <div className="admin-page-wrapper">
        <AdminSidebar />
        {dashboard}
      </div>
    </div>
  )
}
