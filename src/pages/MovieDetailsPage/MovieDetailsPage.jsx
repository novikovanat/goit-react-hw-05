import { Link, useLocation, useParams } from "react-router-dom";
import fetchMovieByID from "../../js/fetchMovieByID";
import { useEffect,  useState } from "react";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
// import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetais = async () => {
      try {
        setLoading(true);
        setError("");
        const apiResponse = 
        await fetchMovieByID(movieId);
        setResponse(apiResponse);
        console.log(apiResponse);
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
      <Link to={location.state}>Go Back</Link>
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      {response !== null && <MovieDetails  details={response}/>}
    </div>
  );
}
