import Home from "@/components/Home/Home";
import { Meta, Movie } from "@/type";
import { getAnimeData } from "@/utils/apiCall";
import { GetStaticProps } from "next";
import React from "react";
interface Props {
  movies: [Movie];
  moviesMeta: Meta;
}
const moviePageNum = ({ movies, moviesMeta }: Props) => {
  return (
    <div>
      <Home movies={movies} moviesMeta={moviesMeta} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context?.params?.page?.toLocaleString();
  const movies = await getAnimeData(page);
  return {
    props: {
      movies: movies.data,
      moviesMeta: movies.meta,
    },
  };
};

export async function getStaticPaths() {
  const movies = await getAnimeData("1");

  //   const paths = movies.meta.params: { search: movie.title.toString() },

  return {
    paths: [{ params: { page: movies.meta.page.toString() } }],
    fallback: "blocking",
  };
}

export default moviePageNum;
