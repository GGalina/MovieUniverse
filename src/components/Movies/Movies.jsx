import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import SearchForm from "components/Search/SearchForm";
import SearchApi from "../Services/searchAPI";
import s from './Movies.module.css'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, ] = useSearchParams();
  const location = useLocation();

  const keyword = search.get("keyword"); 

  useEffect(() => {
    if (!keyword) {
      return;
    }
    const addMovies = async () => {
      try {
        const data = await SearchApi(keyword);
        if (data.results.length === 0) {
          alert(`Sorry we dont have movies on ${keyword} keyword`);
          return;
        }
          setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    addMovies();
  }, [keyword]);

  return (
    <>
      <SearchForm />
      {movies.length > 0 && 
        <>
          <h2 className={s.searchTitle}>Search results</h2>
          <ul className={s.searchList}>
            {movies.map(({ title, id }) => (
              <li className={s.searchItem} key={id}>
                <Link className={s.searchLink } to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      }
    </>
  );
};

export default Movies;