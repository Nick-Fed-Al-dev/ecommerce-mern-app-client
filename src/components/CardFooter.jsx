import { useCallback, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export const CardFooter = () => {
  const {cardTotalPrice, setCardTotalPrice, cardProducts} = useContext(UserContext)

  const totalPriceCountHandler = useCallback(async() => {
    const price = cardProducts.reduce((total, curr) => total + curr.price, 0)
    setCardTotalPrice(price)
  }, [cardProducts, setCardTotalPrice])

  useEffect(() => {
    totalPriceCountHandler()
  }, [totalPriceCountHandler, ])

  return (
    <div className="card-footer">
      <div className="card-total-price">Стоимость: {cardTotalPrice + '$'}</div>
      <button className="btn deep-purple accent-3">Оформить Заказ</button>
    </div>
  )
}
