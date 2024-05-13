export default function Cast({ cast }) {
  const actorsList = cast.map((cast) => {
    return (
      <li key={cast.id}>
        <h4>{cast.name}</h4>
      </li>
    );
  });

  return <ul>{actorsList}</ul>;
}
