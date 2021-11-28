import { createContext } from "react";


export const AuthContext = createContext({
  token: '',
  role: 'NATIVE',
  id: '',
  login: () => {},
  logout: () => {}
}) 