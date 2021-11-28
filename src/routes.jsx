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

  const adminRoute = isAdmin ? <Route path="/admin" element={<AdminPage />} /> : null

  if(isAuthenticated){
    return(
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {catalogRoutes}
        {adminRoute}
        <Route path="/card" element={<CardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} /> 
        <Route path="*" element={<MainPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  )

}