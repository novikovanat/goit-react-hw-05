import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
const fetchMovieByID = lazy(() => import("../../js/fetchMovieByID"));
const Loader = lazy(() => import("../../components/Loader/Loader"));
const MovieDetails = lazy(() => import("../../components/MovieList/MovieList"));

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [response, setResponse] = useState({
    page: null,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BackLinkUrl = useRef(location.state);

  useEffect(() => {
    const getDetais = async () => {
      try {
        setLoading(true);
        setError("");
        const apiResponse = await fetchMovieByID(movieId);
        setResponse(apiResponse);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getDetais(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={BackLinkUrl.current ?? "/movies"}>Go Back</Link>
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      <ul>
        {0<response.total_results && <MovieDetails details={response} />}
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback='loading'>
        <Outlet />
      </Suspense>
    </div>
  );
}
