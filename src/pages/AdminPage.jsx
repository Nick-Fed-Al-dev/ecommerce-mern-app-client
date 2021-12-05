import { Navbar } from "../components/Navbar"
import {ProductDashboard} from "../components/ProductDashboard";
import {UserDashboard} from "../components/UserDashboard";
import {CategoryDashboard} from "../components/CategoryDashboard";
import {AdminSidebar} from "../components/AdminSidebar";


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
