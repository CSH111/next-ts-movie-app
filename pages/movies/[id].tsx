import http from "@/api/http";

interface DetailProps {
  movieDetail: { original_title: string };
}

const Detail = ({ movieDetail }: DetailProps) => {
  const { original_title } = movieDetail;

  return <div>{original_title}</div>;
};

export default Detail;

interface Query {
  query: {
    id: string;
  };
}

export async function getServerSideProps({ query }: Query) {
  const id = query.id;
  const { data } = await http.get(`/movie/${id}`);
  return {
    props: {
      movieDetail: data,
    },
  };
}
