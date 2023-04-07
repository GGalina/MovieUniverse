import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
    const location = useLocation();
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <li>
                    <NavLink className={getACtiveClass} to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={getACtiveClass} to="/movies" state={location}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Navigation;