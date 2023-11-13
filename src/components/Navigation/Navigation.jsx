import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";
import logo from '../../assets/img/logo.png';

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
    const location = useLocation();
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img className={s.imageLogo} src={logo} alt="Movie clapper" width="100" height="100"></img>
                <NavLink className={s.logotext} to="/" end>Movie Universe</NavLink>
            </div>
            <ul className={s.list}>
                <li>
                    <NavLink className={getACtiveClass} to="/trending" end>
                        Trending
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