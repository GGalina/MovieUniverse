import { useEffect, useState } from 'react';
import HomeApi from 'components/Services/homeAPI';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await HomeApi();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    addMovies();
  }, []);

  return (
    <div className={s.trandingContainer}>
      <h2 className={s.tradingTitle}>Trending today</h2>
        <ul className={s.trandingList}>
          {movies.map(({ title, id }) => (
            <li className={s.trandingItem} key={id}>
              <NavLink className={s.NavLink} to={`movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;