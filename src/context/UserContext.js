import { createContext } from "react";


export const UserContext = createContext({
  cardProducts: [],
  setCardProducts: () => {},
  loading: false
})