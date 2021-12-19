import { NavLink } from "react-router-dom"


export const DetailBtn = ({product}) => {
  return (
    <NavLink to={'/detail/' + product.id}><button className="btn black">Детали</button></NavLink>
  )
}
