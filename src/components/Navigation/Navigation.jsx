import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

export default function Navigation() {
    return (
        <nav className={css.container}>
            <ul className={css.list}>
                <li><NavLink to="/" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Home</NavLink></li>
                <li><NavLink to="/movies" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Movies</NavLink></li>
            </ul>
        </nav>
    )
}