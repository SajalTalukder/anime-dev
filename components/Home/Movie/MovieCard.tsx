/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/type";
import { useRouter } from "next/router";
import React from "react";
interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  const path = `/movie-details/${movie._id}`;
  const router = useRouter();
  return (
    <div className="mt-10 bg-gray-200">
      <img
        src={movie.image}
        className="w-full h-[70%] object-cover"
        alt={movie.title}
      />
      <div className="p-4 flex flex-col h-[30%] justify-center">
        <h1 className="font-bold text-md mb-2">{movie.title}</h1>

        <div className="mb-6">
          <button
            onClick={() => {
              router.push(path);
            }}
            className="px-4 rounded-lg  py-1 text-lg text-white font-bold  bg-blue-600"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
