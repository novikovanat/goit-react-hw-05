import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchAdditionalInfo from "../../js/fetchAdditionalInfo";
import Loader from "../Loader/Loader";
import { string } from "yup";
export default function MovieCast() {
  const { movieId } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetais = async () => {
      try {
        setLoading(true);
        setError("");
        const apiResponse = await fetchAdditionalInfo(movieId, "credits");
        setResponse(apiResponse);
        console.log(apiResponse);
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
    </div>
  );
}
