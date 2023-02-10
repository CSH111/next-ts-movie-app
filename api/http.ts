import axios from "axios";

const MOVIE_API_URL = "https://api.themoviedb.org/3";

export default axios.create({
  baseURL: MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});
