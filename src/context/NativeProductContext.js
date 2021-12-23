import { createContext } from "react";


export const NativeProductContext = createContext({
  products: [],
  sorted: [],
  setSorted: () => {},
  productPage: 1,
  setProductPage: () => {},
  isSorted: false,
  setIsSorted: () => {},
  loading: false
})