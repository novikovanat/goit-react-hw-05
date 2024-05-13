import React from "react";

export default function MovieDetails({
  details: {
    poster_path,
    original_title,
    production_countries:[{name}],
    overview,
    title,
  },
}) {
  const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
 
  return (
    <div>
      <img src={imageURL} alt={`poster${original_title}`} />
      <h2>{title}</h2>
      <p>Country: {name} </p>
      <p>{overview}</p>
    </div>
  );
}
