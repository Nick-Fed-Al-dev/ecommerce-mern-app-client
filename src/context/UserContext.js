import { createContext } from "react";


export const UserContext = createContext({
  cardProducts: [],
  setCardProducts: () => {},
  cardTotalPrice: 0,
  setCardTotalPrice: () => {},
  removeCardProduct: () => {},
  getCardProducts: () => {},
  loading: false
})