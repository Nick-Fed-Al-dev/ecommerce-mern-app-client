import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";


export const Sidenav = () => {
	const {logout, role, isAuthenticated} = useContext(AuthContext)

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
		<NavLink to="/auth"><button onClick={logout} className="btn deep-purple accent-3 auth-btn">Выйти</button></NavLink>
		:
		<NavLink to="/auth"><button className="btn deep-purple accent-3 auth-btn">Войти</button></NavLink>

	const adminNav = role === 'ADMIN' ?
		<li className="nav-item">
			<NavLink to="/admin">Панель Администратора</NavLink>
		</li>
		:
		null

	return (
		<div className="side-nav">
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
				<li>
					{authBtn}
				</li>
			</ul>

		</div>
	)
}