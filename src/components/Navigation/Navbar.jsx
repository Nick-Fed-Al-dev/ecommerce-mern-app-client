import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {NavContext} from "../../context/NavContext";
import {Sidenav} from "./Sidenav";

export const Navbar = () => {

  const {logout, role, isAuthenticated} = useContext(AuthContext)
  const {isOpen, setIsOpen} = useContext(NavContext)

  const cardLink = isAuthenticated ? (
    <li className="nav-item">
      <NavLink to="/card">
        Корзина
      </NavLink>
    </li>
  )
  :
  null

  const authBtn = isAuthenticated ?
  <NavLink to="/auth"><i onClick={logout} className="material-icons auth-icon">logout</i></NavLink>
  :
  <NavLink to="/auth"><i className="material-icons auth-icon">login</i></NavLink>

  const adminNav = role === 'ADMIN' ?
  <li className="nav-item">
    <NavLink to="/admin">Дэшборд</NavLink>
  </li> 
  :
  null

  const SIdeBar = isOpen ?
  <Sidenav />
  :
  null

  return (
    <nav className="header black">
      <div className="header-wrapper">
        <NavLink to="/"><div className="header-logo">Ecommerce App</div></NavLink>
        <div className="header-control">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">
                Главная
              </NavLink>
            </li>
            {cardLink}
            <li className="nav-item">
              <NavLink to="/catalog">
                Каталог
              </NavLink>
            </li>
            {adminNav}
          </ul>
          {authBtn}
        </div>
        <button onClick={setIsOpen.bind(this, prev => !prev)} className="burger">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect rx="10" width="100" height="15"></rect>
            <rect rx="10" y="35" width="100" height="15"></rect>
            <rect rx="10"  y="70" width="100" height="15"></rect>
          </svg>
        </button>
      </div>
      {SIdeBar}
    </nav>
  )
}
