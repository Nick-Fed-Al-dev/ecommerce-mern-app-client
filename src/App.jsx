import 'materialize-css'
import { useCallback, useEffect, useRef, useState } from 'react';
import { AuthContext } from './context/AuthContext.js';
import { NativeProductTypeContext } from './context/NativeProductTypeContext.js';
import { useAuth } from './hooks/auth.hook.js';
import { useNativeProductType } from './hooks/nativeProductType.hook.js';
import { useRoutes } from "./routes.jsx";


function App() {
  const {token, userId, userRole, login, logout} = useAuth()
  const {getProductTypes, loading} = useNativeProductType()

  const [productTypes, setProductTypes] = useState([])

  const isAuthenticated = !!token

  const getProductTypesHandler = useCallback(async () => {
    const types = await getProductTypes(token)
    setProductTypes(types)
    
  }, [getProductTypes, token])

  useEffect(() => {
    if(isAuthenticated) {
      getProductTypesHandler()

    }
    
  }, [getProductTypesHandler, isAuthenticated])

  const routes = useRoutes(isAuthenticated, productTypes.map(type => type.name), userRole === 'ADMIN')
  
  return (
    <NativeProductTypeContext.Provider value={{productTypes, loading}}>
    <AuthContext.Provider value={{
      token, id: userId, role: userRole, login, logout
    }}>
      <div className="App">
        {routes}
      </div>
    </AuthContext.Provider>
    </NativeProductTypeContext.Provider>
  );
}

export default App;
