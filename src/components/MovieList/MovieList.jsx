import { Link, useLocation } from "react-router-dom";


export default function MovieList({ moviesArray }) {
 const location = useLocation()
  const movieList = moviesArray.map(({ original_title, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={location}>
          <div>{original_title}</div>
        </Link>
      </li>
    );
  });
  return <ul>{movieList}</ul>;
}
