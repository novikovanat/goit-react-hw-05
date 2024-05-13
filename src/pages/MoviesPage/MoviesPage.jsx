import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchMovies from "../../js/fetchMovies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
// import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState({
    page: null,
    total: 0,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let query = searchParams.get("query") ?? "";
    let page = searchParams.get("page") ?? 1;
    if (query === "") {
      return;
    }
    search(query, page);
  }, [searchParams]);

  const search = async (query, page) => {
    try {
      setLoading(true);
      setError("");
      const apiResponse = await fetchMovies(query, page);
      const { results } = apiResponse;
      console.log(apiResponse);
      if (results.length == 0) {
        toast(`We couldn't find anything like ${query}`);
        return;
      }
      if (page > 1) {
        setResponse((prevResponse) => {
          const { results: prevResults } = prevResponse;
          return { ...prevResponse, results: prevResults.concat(results) };
        });
      } else {
        setResponse(apiResponse);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar value={searchParams} onSearch={setSearchParams} />
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      {0 < response.total_results && (
        <MovieList moviesArray={response.results} />
      )}
      <Toaster />
    </div>
  );
}
