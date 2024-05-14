
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ moviesArray }) {
  const location = useLocation();
  const movieList = moviesArray.map(({ title, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={location}>
          <div>{title}</div>
        </Link>
      </li>
    );
  });
  return <ul>{movieList}</ul>;
}
