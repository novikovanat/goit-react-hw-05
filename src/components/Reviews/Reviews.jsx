export default function Reviews({ reviews }) {
  const reviewsList = reviews.map((reviews) => {
    return (
      <li key={reviews.id}>
        <h4>{reviews.author}</h4>
        <p>{reviews.content}</p>
      </li>
    );
  });
  if (reviews.length < 1) {
    return <p>no reviews</p>;
  }

  return <ul>{reviewsList}</ul>;
}
