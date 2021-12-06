import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {NavContext} from "../context/NavContext";


export const Sidenav = () => {
	const {logout, role, isAuthenticated} = useContext(AuthContext)
	const {setIsOpen} = useContext(NavContext)

	const closeNavHandler = () => setIsOpen(false)

	const cardLink = isAuthenticated ? (
			<li onClick={closeNavHandler} className="nav-item">
				<NavLink to="/card">
					Card
				</NavLink>
			</li>
		)
		:
		null

	const authBtn = isAuthenticated ?
		<NavLink to="/auth"><button onClick={() => {logout(); closeNavHandler()}} className="btn blue auth-btn">Sign Out</button></NavLink>
		:
		<NavLink to="/auth"><button onClick={closeNavHandler} className="btn blue auth-btn">Sign In</button></NavLink>

	const adminNav = role === 'ADMIN' ?
		<li onClick={closeNavHandler} className="nav-item">
			<NavLink to="/admin">Dashboard</NavLink>
		</li>
		:
		null

	return (
		<div className="side-nav">
			<ul className="nav-list">
				<li onClick={closeNavHandler} className="nav-item">
					<NavLink to="/">
						Main
					</NavLink>
				</li>
				{cardLink}
				<li onClick={closeNavHandler} className="nav-item">
					<NavLink to="/catalog">
						Catalog
					</NavLink>
				</li>
				{adminNav}
				<li>
					{authBtn}
				</li>
			</ul>

		</div>
	)
}