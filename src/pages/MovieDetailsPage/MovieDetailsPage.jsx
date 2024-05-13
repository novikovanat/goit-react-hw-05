import { Link, useLocation, useParams } from "react-router-dom";
import fetchMovieByID from "../../js/fetchMovieByID";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader/Loader";
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
  // const imageURL = `https://image.tmdb.org/t/p/w500/${response.poster_path}`;
  // console.log(response);

  console.log("==================response==================");
  console.log(response);
  console.log("====================================");

  return (
    <div>
      <Link to={location.state}>Go Back</Link>
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      {/* <h2><img src={`https://image.tmdb.org/t/p/w500/${apiResponse.poster_path}`}></img></h2> */}
    </div>
  );
}
