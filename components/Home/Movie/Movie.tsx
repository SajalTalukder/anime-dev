/* eslint-disable @next/next/no-img-element */
import { Meta, Movie } from "@/type";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import React, { useRef } from "react";
import MovieCard from "./MovieCard";

interface Props {
  movies: [Movie];
  title: string;
  moviesMeta: Meta;
}

const Movie = ({ movies, title, moviesMeta }: Props) => {
  const ref = useRef(null);

  const previousPage = moviesMeta.page > 1;
  const nextPage = moviesMeta.totalPage > moviesMeta.page;
  const nextPagePath = `/movie-page/${moviesMeta.page + 1}`;
  const previosPagePath = `/movie-page/${moviesMeta.page - 1}`;
  const router = useRouter();
  return (
    <div>
      <div>
        <h1 className="mt-10 font-bold uppercase text-center text-[2rem]">
          {title}
        </h1>
        <div className="w-[80%] gap-10 mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-4">
          {movies.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })}
        </div>
      </div>
      <div className="text-center space-x-4 mt-10 mb-6">
        <LoadingBar color="#f11946" ref={ref} />
        {previousPage && (
          <button
            onClick={() => {
              router.push(previosPagePath);
            }}
            className="text-white text-lg rounded-md font-bold px-6 py-2 bg-red-600"
          >
            Previous
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => {
              router.push(nextPagePath);
            }}
            className="text-white text-lg rounded-md font-bold px-6 py-2 bg-red-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
