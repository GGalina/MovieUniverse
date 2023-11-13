import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeroApi } from 'components/Services/homeAPI';
import { ImagesApi } from 'components/Services/moviesAPI';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroData = await HeroApi();
        setMovies(heroData.results.slice(0, 20)); 
        const imagesData = await ImagesApi();
        setImages(imagesData.images);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

      if (!movies || !images) {
            return null;
      }

      const { base_url } = images;

      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true, 
            centerPadding: '10px', 
      };

  return (
      <div className={s.container}>
            <div className={s.poster}>
                  <Slider {...settings}>
                  {movies.map(({ title, poster_path, id }) => (
                        poster_path && poster_path !== null && (
                              <img className={s.posterImg} key={id} src={`${base_url}/original${poster_path}`} alt={title} width='150' />
                        )
                  ))}
                  </Slider>
            </div>
            <div className={s.wrapper}>
                  <p className={s.heroText}>Welcome to Movie Universe,
                        where the cinematic cosmos unfolds at your fingertips.
                        Dive into a universe of endless entertainment as you explore
                        and discover the latest and greatest in the world of movies.
                        Whether you're a film aficionado or a casual viewer,
                        Movie Universe is your portal to a galaxy of stories, genres,
                        and emotions.
                  </p>
                  <p className={s.heroActionCall}>Ready to discover what's trending now in the Movie Universe?
                        Click below and let the magic begin.
                  </p>
                  <NavLink className={s.trendingBtn} to="/trending" end> Trending NOW </NavLink>
            </div>

      </div>
      );
};

export default Home;