import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchTrendingMovies from "../../js/fetchTrendingMovies";
import MovieList from "../../components/MovieList/MovieList";

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
      {0 < response.total_results && (
        <MovieList moviesArray={response.results} />
      )}
    </div>
  );
}
