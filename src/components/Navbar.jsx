import React, {useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {NavContext} from "../context/NavContext";
import {Sidenav} from "./Sidenav";

export const Navbar = () => {

  const {logout, role, isAuthenticated} = useContext(AuthContext)

  const {isOpen, setIsOpen} = useContext(NavContext)

  const cardLink = isAuthenticated ? (
    <li className="nav-item">
      <NavLink to="/card">
        Card
      </NavLink>
    </li>
  )
  :
  null

  const authBtn = isAuthenticated ?
  <button onClick={logout} className="btn blue">Sign Out</button> 
  :
  <NavLink to="/auth"><button className="btn blue">Sign In</button></NavLink>

  const adminNav = role === 'ADMIN' ?
  <li className="nav-item">
    <NavLink to="/admin">Dashboard</NavLink>
  </li> 
  :
  null

  const SIdeBar = isOpen ?
  <Sidenav />
  :
  null

  return (
    <nav className="header">
      <div className="header-wrapper">
        <div className="header-logo">Ecommerce App</div>
        <div className="header-control">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">
                Main
              </NavLink>
            </li>
            {cardLink}
            <li className="nav-item">
              <NavLink to="/catalog">
                Catalog
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
