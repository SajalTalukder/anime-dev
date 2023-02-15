import MovieDetails from "@/components/Home/Movie/MovieDetails";
import { Movie } from "@/type";
import { getAnimeById, getAnimeData } from "@/utils/apiCall";
import { GetStaticProps } from "next";
import React from "react";

interface Props {
  movie: Movie;
}
const MovieDetailsPage = ({ movie }: Props) => {
  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.movieId?.toString();
  let movie;
  if (id) {
    movie = await getAnimeById(id);
  }
  return {
    props: {
      movie,
    },
  };
};

export async function getStaticPaths() {
  const movies = await getAnimeData("1");

  const paths = movies.data.map((movie: Movie) => ({
    params: { movieId: movie._id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default MovieDetailsPage;
