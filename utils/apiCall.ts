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
      "X-RapidAPI-Key": "83c760a53amsh3ba770772a3fa97p1eccf2jsnb3e989266ac8",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
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
      "X-RapidAPI-Key": "83c760a53amsh3ba770772a3fa97p1eccf2jsnb3e989266ac8",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export { getAnimeData, getAnimeById };
