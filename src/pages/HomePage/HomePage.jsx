import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import fetchTrendingMovies from "../../js/fetchTrendingMovies";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

export default function HomePage() {
  const [response, setResponse] = useState({
    total: 0,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrends();
  }, []);

  async function getTrends() {
    try {
      setLoading(true);
      setError("");
      const apiResponse = await fetchTrendingMovies();
      console.log(apiResponse);
      setResponse(apiResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      {loading === true && <Loader />}
      {error !== "" && <ErrorMessage errorText={error} />}
      {0 < response.total_results && (
        <MovieList moviesArray={response.results} />
      )}
    </div>
  );
}
