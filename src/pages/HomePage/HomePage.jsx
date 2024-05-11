import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchMovies from "../../fetchMovies";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  // const [response, setResponse] = useState({
  //   total: 0,
  //   total_pages: 0,
  //   results: [],
  // });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [currentImage, setCurrentImage] = useState(null);

  // useEffect(() => {
  //   if (query === "") {
  //     return;
  //   }
  //   search(query);
  // }, [query]);

  async function search() {
    try {
      setLoading(true);
      setError("");
      const apiResponse = await fetchMovies(query);
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
  }
  return (
    <div>
      <SearchBar onSubmit={setQuery} onSearch={search} />;
      {loading === true && <Loader />}
      <button onClick={search}>app</button>
    </div>
  );
}
