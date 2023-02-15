import React, { useState, useEffect } from "react";
//@ts-ignore
import movieTrailer from "movie-trailer";
import getVideoId from "get-video-id";
import YouTube from "react-youtube";

interface Props {
  title: string;
}

const YoutubePlayer = ({ title }: Props) => {
  const [movieLink, setMovieLink] = useState("");
  useEffect(() => {
    const getMovieLink = async () => {
      const ytMovieLink = await movieTrailer(title);

      setMovieLink(ytMovieLink);
    };
    getMovieLink();
  }, [title]);

  const opts = {
    height: "300",
    width: "500",

    playerVars: {
      autoplay: false,
    },
  };

  const { id: movieTrailerId } = getVideoId(
    movieLink || "https://www.youtube.com/watch?v=MihlCysVWNs"
  );

  return <YouTube videoId={movieTrailerId || "kUkcQb-K3KU"} opts={opts} />;
};

export default YoutubePlayer;
