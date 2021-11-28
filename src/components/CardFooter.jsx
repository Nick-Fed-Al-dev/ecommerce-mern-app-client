import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNativeUser } from '../hooks/nativeUser.hook'
import './css/CardFooter.css'

export const CardFooter = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const {id, token} = useContext(AuthContext)
  const {getCardProducts} = useNativeUser()

  const totalPriceCountHandler = useCallback(async() => {
    const cardProducts = await getCardProducts(id, token)
    const price = cardProducts.reduce((total, curr) => total + curr.price, 0)
    setTotalPrice(price)
  }, [getCardProducts, id, token])

  useEffect(() => {
    totalPriceCountHandler()
  }, [totalPriceCountHandler, ])

  return (
    <div className="card-footer">
      <div className="total-price">Total: {totalPrice + '$'}</div>
      <button className="btn blue pay-btn">Buy</button>
    </div>
  )
}
