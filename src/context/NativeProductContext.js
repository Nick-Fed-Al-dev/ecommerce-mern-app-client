import { createContext } from "react";


export const NativeProductContext = createContext({
  products: [],
  sorted: [],
  setSorted: () => {},
  loading: false
})