export default function MovieDetails({
  details: {
    poster_path,
    original_title,
    production_countries,
    overview,
    title,
  },
}) {
  let countryName;
  const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  if (production_countries.length > 0) {
    const [{ name }] = production_countries;
    countryName = name;
  } else {
    countryName = "no information";
  }

  return (
    <div>
      <img src={imageURL} alt={`poster${original_title}`} />
      <h2>{title}</h2>
      <p>Country: {countryName} </p>
      <p>{overview}</p>
    </div>
  );
}
