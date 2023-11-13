import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';
import Navigation from "../Navigation/Navigation";

const Home = lazy(() => import("../Home/Home"));
const Trending = lazy(() => import("../Trending/Trending"));
const Movies = lazy(() => import("../Movies/Movies"));
const MoviesInfo = lazy(() => import("../MovieInfo/MovieInfo"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const NotFound = lazy(() => import("../NotFound/NotFound"));

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#2F4454', '#2E151B', '#DA7B93', '#376E6F', '#1C3334']}
      />
      }>
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="movies" element={<Movies />} />
        <Route
            path="movies/:id"
            element={
              <Suspense fallback={<ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#2F4454', '#2E151B', '#DA7B93', '#376E6F', '#1C3334']}
              />
              }>
                <MoviesInfo />
              </Suspense>
            }
          >
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;