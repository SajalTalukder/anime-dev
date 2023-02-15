interface Movie {
  genres: [string];
  image: string;
  link: string;
  synopsis: string;
  status: string;
  title: string;
  thum: string;
  _id: string;
  type: string;
  episodes: number;
}

interface Meta {
  page: number;
  size: number;
  totalData: number;
  totalPage: number;
}

export { Movie, Meta };
