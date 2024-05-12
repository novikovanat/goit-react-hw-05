import { Link , useLocation } from "react-router-dom";

export default function MovieDetailsPage() {
  const location = useLocation();
  
  return (
    <div>
      <Link to={location.state}>Go Back</Link>
      <h2>
        MovieDetailsPage
      </h2>
    </div>
  );
}
