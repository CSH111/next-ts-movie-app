import { Seo } from "../components";
import http from "@/api/http";
import Link from "next/link";

interface MovieListItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface HomeProps {
  results: MovieListItem[];
}

const Home = ({ results: movies }: HomeProps) => {
  return (
    <>
      <Seo title="app - home" />
      <ul>
        {movies?.map(({ original_title, id }) => (
          <Link href={`/movies/${id}`} key={id}>
            <a>
              <li>
                <h4>{original_title}</h4>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const {
    data: { results },
  } = await http.get("/movie/popular?language=kr-KR&page=1");
  return {
    props: {
      results,
    },
  };
}
