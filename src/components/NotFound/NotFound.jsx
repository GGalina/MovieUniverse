import { NavLink } from 'react-router-dom';
import s from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Oops!</h1>
      <div className={s.box}>
        <h2 className={s.subheader}>404 - Page not found...</h2>
        <p className={s.desc}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <NavLink className={s.NavLink} to="/trending"> Back to Trending Now </NavLink>
      </div>
    </div>
  );
};

export default NotFound;