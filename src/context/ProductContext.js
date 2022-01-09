import { createContext } from "react";


export const ProductContext = createContext({
  allProducts: [],
  products: [],
  sorted: [],
  productPage: 1,
  isSorted: false,
  loading: false,
  isNotFound: false,
  setSorted: () => {},
  setProductPage: () => {},
  setIsSorted: () => {},
  setIsNotFound: () => {}
})