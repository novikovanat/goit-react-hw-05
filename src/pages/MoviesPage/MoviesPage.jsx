import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchMovies from "../../fetchMovies";
import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({
    page: null,
    total: 0,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    search(query, page);
  }, [page, query]);

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
      <Navigation />
      <SearchBar onSubmit={setQuery} />
      {loading === true && <Loader />}
      <MovieList moviesArray={response.results}/>
      <Toaster />
    </div>
  );
}
