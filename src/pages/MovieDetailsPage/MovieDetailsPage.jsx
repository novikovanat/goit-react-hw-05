import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import fetchMovieByID from "../../js/fetchMovieByID.js";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [response, setResponse] = useState(null);
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
    getDetais();
  }, [movieId]);

  return (
    <div>
      <Link to={BackLinkUrl.current ?? "/movies"}>Go Back</Link>
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      {response !== null && <MovieDetails details={response} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
