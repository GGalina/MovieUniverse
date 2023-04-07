import { lazy, Suspense } from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Home = lazy(() => import("../Home/Home"));
const Movies = lazy(() => import("../Movies/Movies"));
const MoviesInfo = lazy(() => import("../MovieInfo/MovieInfo"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const NotFound = lazy(() => import("../NotFound/NotFound"));

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
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
        <Route path="movies" element={<Movies />} />
        <Route
            path="movies/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
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