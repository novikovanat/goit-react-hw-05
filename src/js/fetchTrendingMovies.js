import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWIyNDg2OWU1YmE4ZmMyOGIwNjEzNzA5YWMwOGE4OSIsInN1YiI6IjY2M2E2MmQwYzkwNTRmMDEyYTkyMDkwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIGyNJVu51XS1CNgb-p1wrSS8D07J3xKRwtbNHhuSNI";
export default async function fetchTrendingMovies() {
  const result = await axios.get(`/3/trending/movie/day?language=en-US`, {
    headers: {
      accept: "application/json",
    },
  });
  return result.data;
}
