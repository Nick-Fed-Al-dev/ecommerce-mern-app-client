import {Routes, Route} from 'react-router-dom'
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

  return(
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      {catalogRoutes}
      {isAuthenticated ? <Route path="/card" element={<CardPage />} /> : null}
      <Route path="/detail/:id" element={<DetailPage />} />
      {isAuthenticated ? null : <Route path="/auth" element={<AuthPage />} />}
      <Route path="*" element={<MainPage />} />
    </Routes>
  )
}