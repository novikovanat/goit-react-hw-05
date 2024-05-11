import { Link } from "react-router-dom";

export default function MovieList({ moviesArray }) {
  const movieList = moviesArray.map(({ original_title, id }, index) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <div>{original_title}</div>
      </Link>
    </li>
  ));
  return <ul>{movieList}</ul>;
}
