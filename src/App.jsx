import 'materialize-css'
import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext.js';
import { NativeProductTypeContext } from './context/NativeProductTypeContext.js';
import { useAuth } from './hooks/auth.hook.js';
import { useNativeProductType } from './hooks/nativeProductType.hook.js';
import { useRoutes } from "./routes.jsx";
import {NavContext} from "./context/NavContext";


function App() {
  const {token, userId, userRole, login, logout} = useAuth()
  const {getProductTypes, loading} = useNativeProductType()
  const [navOpened, setNavOpened] = useState(false)

  const [productTypes, setProductTypes] = useState([])

  const isAuthenticated = !!token

  const getProductTypesHandler = useCallback(async () => {
    const types = await getProductTypes()
    setProductTypes(types)
    
  }, [getProductTypes])

  useEffect(() => {
      getProductTypesHandler()
    
  }, [getProductTypesHandler, isAuthenticated])

  const routes = useRoutes(isAuthenticated, productTypes.map(type => type.name), userRole === 'ADMIN')
  
  return (
    <NavContext.Provider value={{isOpen: navOpened, setIsOpen: setNavOpened}}>
    <NativeProductTypeContext.Provider value={{productTypes, loading}}>
    <AuthContext.Provider value={{
      token, id: userId, role: userRole, login, logout, isAuthenticated
    }}>
      <div className="App">
        {routes}
      </div>
    </AuthContext.Provider>
    </NativeProductTypeContext.Provider>
    </NavContext.Provider>
  );
}

export default App;
