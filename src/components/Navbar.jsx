import React, { useContext } from 'react'
import './css/NavBar.css'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {

  const {logout, userRole} = useContext(AuthContext)

  const adminNav = userRole === 'ADMIN' ? <li className="nav-item"><NavLink to="/admin">Dashboard</NavLink></li> : null
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">Ecommerce App</div>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">
                Main
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/card">
                Card
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalog">
                Catalog
              </NavLink>
            </li>
            {adminNav}
          </ul>
          <button onClick={logout} className="btn blue">Logout</button>
        </div>
      </div>
    </nav>
  )
}
