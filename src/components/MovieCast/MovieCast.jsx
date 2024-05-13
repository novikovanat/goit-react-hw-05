import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchAdditionalInfo from "../../js/fetchAdditionalInfo";
import Loader from "../Loader/Loader";
import Cast from "../Cast/Cast";
export default function MovieCast() {
  const { movieId } = useParams();
  const [response, setResponse] = useState({ id: null, cast: [], crew: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetais = async () => {
      try {
        setLoading(true);
        setError("");
        const apiResponse = await fetchAdditionalInfo(movieId, "credits");
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
      <h2>MovieCast</h2>
      {loading === true && <Loader />}
      {/* {error !== "" && <ErrorMessage errorText={error} />} */}
      <Cast cast={response.cast} />
    </div>
  );
}
