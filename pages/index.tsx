import SignIn from "@/components/auth/SignIn";
import Loader from "@/components/Helper/Loader";
import Home from "@/components/Home/Home";
import { Meta, Movie } from "@/type";
import { useSession } from "next-auth/react";
import { getAnimeData } from "../utils/apiCall";

interface Props {
  movies: [Movie];
  moviesMeta: Meta;
}

const HomePage = ({ movies, moviesMeta }: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }

  if (!session?.user) {
    return <SignIn />;
  }
  return (
    <>
      <div className="">
        <Home movies={movies} moviesMeta={moviesMeta} />
      </div>
      ;
    </>
  );
};

export async function getStaticProps() {
  const movies = await getAnimeData("1");
  return {
    props: {
      movies: movies.data,
      moviesMeta: movies.meta,
    },
  };
}

export default HomePage;
