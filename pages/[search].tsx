import SignIn from "@/components/auth/SignIn";
import Loader from "@/components/Helper/Loader";
import MovieList from "@/components/Home/Movie/Movie";
import Hero from "@/components/Home/Nav/Hero";
import Nav from "@/components/Home/Nav/Nav";
import { Meta, Movie } from "@/type";
import { getAnimeData } from "@/utils/apiCall";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import React from "react";

interface Props {
  movies: [Movie];
  title: string;
  moviesMeta: Meta;
}

const Search = ({ movies, title, moviesMeta }: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }

  if (!session?.user) {
    return <SignIn />;
  }
  const condition = !(movies.length > 0);
  return (
    <div>
      <Nav />
      <Hero />
      {condition && (
        <h1 className="text-center text-[2rem] uppercase text-purple-900 font-bold mt-10">
          No Movie Found for ({title})
        </h1>
      )}
      {!condition && (
        <MovieList movies={movies} moviesMeta={moviesMeta} title={title} />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const search = context?.params?.search?.toLocaleString();
  const movies = await getAnimeData("1", search);
  return {
    props: {
      movies: movies.data,
      title: search,
      moviesMeta: movies.meta,
    },
  };
};

export async function getStaticPaths() {
  const movies = await getAnimeData("1");

  const paths = movies.data.map((movie: Movie) => ({
    params: { search: movie.title.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Search;
