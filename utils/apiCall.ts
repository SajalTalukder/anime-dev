import axios from "axios";

const getAnimeData = async (
  page: string = "1",
  search: string | undefined = undefined
) => {
  const options = {
    method: "GET",
    url: "https://anime-db.p.rapidapi.com/anime",
    params: {
      page: page,
      search: search,
      size: "30",
      sortBy: "ranking",
      sortOrder: "asc",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPIKEY}`,
      "X-RapidAPI-Host": `${process.env.RAPIDAPIHOST}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

const getAnimeById = async (id: String) => {
  const options = {
    method: "GET",
    url: `https://anime-db.p.rapidapi.com/anime/by-id/${id}`,
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPIKEY}`,
      "X-RapidAPI-Host": `${process.env.RAPIDAPIHOST}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export { getAnimeData, getAnimeById };
