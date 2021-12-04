import {createContext} from "react";

export const NavContext = createContext({
	isOpen: false,
	setIsOpen: () => {}
})