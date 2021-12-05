import {Routes, Route} from 'react-router-dom'
import { AdminPage } from './pages/AdminPage'
import { AuthPage } from './pages/AuthPage'
import { CardPage } from './pages/CardPage'
import { CatalogPage } from './pages/CatalogPage'
import { DetailPage } from './pages/DetailPage'
import { MainPage } from './pages/MainPage'

export const useRoutes = (isAuthenticated, productTypes, isAdmin) => {
  const catalogRoutes = productTypes.map((type, i) => {
    return (
      <Route key={i} path={'/catalog/' + type.toLowerCase()} element={<MainPage productType={type} />} />
    )
  })

  const adminRoute = isAdmin ? [
    <Route key="1" path="/admin/*" element={<AdminPage page={'Products'} />} />,
    <Route key="2" path="/admin/users" element={<AdminPage page={'Users'}/>} />,
    <Route key="3" path="/admin/categories" element={<AdminPage page={'Categories'}/>} />
  ] : null

  return(
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      {catalogRoutes}
      {adminRoute}
      {isAuthenticated ? <Route path="/card" element={<CardPage />} /> : null}
      <Route path="/detail/:id" element={<DetailPage />} />
      {isAuthenticated ? null : <Route path="/auth" element={<AuthPage />} />}
      <Route path="*" element={<MainPage />} />
    </Routes>
  )
}