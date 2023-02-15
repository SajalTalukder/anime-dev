/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/type";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Nav from "../Nav/Nav";
import MovieModal from "@/components/Helper/MovieModal";
import { PlayIcon } from "@heroicons/react/24/outline";

interface Props {
  movie: Movie;
}

const MovieDetails = ({ movie }: Props) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center  flex-col w-[95vw] md:h-[88vh] ">
        <div className="flex flex-col md:flex-row items-center space-x-10 w-[95%] md:w-[80%] mx-auto">
          <div>
            <img
              className="mt-[5rem] mb-[2rem] md:mb-0 md:mt-0"
              src={movie.image}
              alt={movie.title}
            />
          </div>
          <div className=" w-[90%] md:w-[60%]">
            <h1 className="text-2xl space-x-3 font-bold mb-2">
              <span>{movie.title}</span>
              <span>
                <a
                  className="text-sm text-blue-800 underline"
                  href={movie.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </span>
            </h1>
            <h1 className="font-semibold text-lg text-gray-700">
              Episods :
              <span className="font-bold text-lg text-red-700">
                {movie.episodes}
              </span>
            </h1>
            <div className="flex my-1 items-center space-x-3 uppercase font-bold text-md text-blue-700">
              {movie.genres.map((gen) => {
                return <h1 key={Math.random() * 10000000}>{gen}</h1>;
              })}
            </div>
            <h1 className="font-semibold text-lg text-gray-700">
              Status : {movie.status}
            </h1>
            <h1 className="font-semibold my-1 text-lg text-gray-700">
              Type : {movie.type}
            </h1>
            <button
              onClick={() => {
                showModal();
              }}
              className="px-6 py-2 flex items-center space-x-3 bg-red-700 text-white font-bold rounded-lg mt-2 mb-2"
            >
              <span>See Trailer</span>

              <span>
                <PlayIcon className="w-5 h-5" />
              </span>
            </button>
            <div className="font-semibold text-md mb-10 text-gray-500">
              {movie.synopsis}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-1 mb-3">
        <button
          onClick={() => {
            router.back();
          }}
          className="px-6 rounded-lg py-3 font-bold bg-red-600 text-white"
        >
          Go Back
        </button>
      </div>
      {show && <MovieModal onCloseModal={hideModal} title={movie.title} />}
    </div>
  );
};

export default MovieDetails;
