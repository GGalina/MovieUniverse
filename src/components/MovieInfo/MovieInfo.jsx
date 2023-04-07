import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { MovieDetailsApi, ImagesAPI } from 'components/Services/moviesAPI';
import s from './MovieInfo.module.css';
import no_poster from 'components/img/no_poster.jpg';

const MovieInfo = () => {
    const {id} = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const previousPage = useRef(location.state?.from);

    useEffect(() => {
        const movieDetails = async () => {
            try {
                if (id) {
                    const data = await MovieDetailsApi(id,'');
                    setMovie(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        const getImage = async () => {
            try {
                const dataImg = await ImagesAPI();
                setImage(dataImg.images);
            } catch (error) {
                console.log(error.message);
            }
    };
    getImage();
    movieDetails();
  }, [id]);

  if (!movie || !image) {
    return null;
  }

  const handleGoBack = () => {
    navigate(previousPage.current);
    };
    const { base_url } = image;
    const { title, release_date, vote_average, overview, poster_path, genres } = movie;
    return (
    <main className={s.mainContainer}>
        <button className={s.button} onClick={handleGoBack} type="button">
            Go Back
        </button>
        <div className={s.container}>
            <div className={s.imgWrap}>
                {poster_path && poster_path != null ?
                    <img src={`${base_url}/original${poster_path}`} alt={title} width='350'/>
                    : <img src={no_poster} alt={title} width='350'/>}
            </div>
            <div className={s.mainDetails}>
                {release_date && release_date != null ?
                    <h2 className={s.movieTitle}>{title} ({release_date})</h2>
                    : <h2 className={s.movieTitle}>{title}</h2>
                }
                <p className={s.movieDescr}>Vote Average : {Math.round(vote_average * 10) / 10} out of 10</p>
                <h3 className={s.movieSubTitle}>Overview</h3>
                {overview && overview != null ?
                    <p className={s.movieDescr}>{overview}</p>
                    : <p className={s.movieDescr}>No overview availible</p>
                }
                <h3 className={s.movieSubTitle}>Genres</h3>
                <div className={s.moviewGenres}>
                    {genres && genres.length > 0 ? genres.map(({ name }) => (
                        <p className={s.movieDescr} key={name}>{name}</p>
                    )) : <p className={s.movieDescr}>No information availible</p>}
                </div>
            </div>
        </div>
        <div className={s.additionalInfo}>
            <h3 className={s.movieSubTitle}>Additional information</h3>
            <ul className={s.list}>
                <li className={s.addItem} >
                        <Link className={s.Link} to={`credits`} state={{ from: location }}>
                        Cast
                    </Link>
                </li>
                <li className={s.addItem} >
                    <Link className={s.Link} to={`reviews`} state={{ from: location }}>
                        Reviews
                    </Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    </main>
    );
};
export default MovieInfo;
