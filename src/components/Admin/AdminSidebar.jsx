import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


export const AdminSidebar = () => {
	const [route, setRoute] = useState('')
	const location = useLocation()


	useEffect(() => {
		const urlRoute = location.pathname.split('/')[2]
		setRoute(urlRoute)
	})
	const setRouteHandler = e => {

	}
	return (
		<div className="admin-sidebar">
			<ul className="routes-list">
				<NavLink to="/admin/products"><li className={route === 'products' || !route ? 'chosen' : ''}>Products</li></NavLink>
				<NavLink to="/admin/users"><li className={route === 'users' ? 'chosen' : ''}>Users</li></NavLink>
				<NavLink to="/admin/categories"><li className={route === 'categories' ? 'chosen' : ''}>Categories</li></NavLink>
			</ul>
		</div>
	)
}