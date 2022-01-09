import 'materialize-css'
import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext.js';
import { CategoryContext } from './context/CategoryContext.js';
import { useAuth } from './hooks/auth.hook.js';
import { useNativeProductType } from './hooks/category.hook.js';
import { useRoutes } from "./routes.jsx";
import {NavContext} from "./context/NavContext";


function App() {
  const {token, userId, userRole, login, logout} = useAuth()
  const {getProductTypes, loading} = useNativeProductType()
  const [navOpened, setNavOpened] = useState(false)

  const navCloseHandler = e => {
    if(
      !e.target.classList.contains('burger')
      &&
      !e.target.parentNode.classList.contains('burger')
      &&
      !e.target.parentNode.parentNode.classList.contains('burger')
      )
    setNavOpened(false)
  }

  const [productTypes, setProductTypes] = useState([])

  const isAuthenticated = !!token

  const getProductTypesHandler = useCallback(async () => {
    const types = await getProductTypes()
    setProductTypes(types)
    
  }, [getProductTypes])

  useEffect(() => {
      getProductTypesHandler()

  }, [getProductTypesHandler, isAuthenticated])

  const routes = useRoutes(isAuthenticated, productTypes.map(type => type.eng), userRole === 'ADMIN')
  
  return (
    <NavContext.Provider value={{isOpen: navOpened, setIsOpen: setNavOpened}}>
    <CategoryContext.Provider value={{productTypes, loading}}>
    <AuthContext.Provider value={{
      token, id: userId, role: userRole, login, logout, isAuthenticated
    }}>
      <div className="App" onClick={navCloseHandler}>
        {routes}
      </div>
    </AuthContext.Provider>
    </CategoryContext.Provider>
    </NavContext.Provider>
  );
}

export default App;
