import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";


export const Sidenav = () => {
	const {logout, role, isAuthenticated} = useContext(AuthContext)

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
		<button onClick={logout} className="btn blue auth-btn">Sign Out</button>
		:
		<NavLink to="/auth"><button className="btn blue auth-btn">Sign In</button></NavLink>

	const adminNav = role === 'ADMIN' ?
		<li className="nav-item">
			<NavLink to="/admin">Dashboard</NavLink>
		</li>
		:
		null

	return (
		<div className="side-nav">
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
				<li>
					{authBtn}
				</li>
			</ul>

		</div>
	)
}