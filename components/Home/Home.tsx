import { Meta, Movie } from "@/type";
import React from "react";
import Movies from "./Movie/Movie";
import Hero from "./Nav/Hero";
import Nav from "./Nav/Nav";

interface Props {
  movies: [Movie];
  moviesMeta: Meta;
}

const Home = ({ movies, moviesMeta }: Props) => {
  return (
    <div>
      <Nav />
      <Hero />
      <div>
        <Movies movies={movies} moviesMeta={moviesMeta} title="Top List" />
      </div>
    </div>
  );
};

export default Home;
