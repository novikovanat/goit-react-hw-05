import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAdditionalInfo from "../../js/fetchAdditionalInfo";
import Loader from "../Loader/Loader";
import Reviews from "../Reviews/Reviews";
export default function MovieReviews() {
  const { movieId } = useParams();
  const [response, setResponse] = useState({
    id: null,
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetais = async () => {
      try {
        setLoading(true);
        setError("");
        const apiResponse = await fetchAdditionalInfo(movieId, "reviews");
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
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      <Reviews reviews={response.results} />
    </div>
  );
}
