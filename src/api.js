import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "1264e1572774dc881bce16d35ddeef41";

export const getTrendFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  return response.data;
};

export const getFilmsById = async (filmId) => {
  const response = await axios.get(`/movie/${filmId}?api_key=${apiKey}`);
  return response.data;
};

export const getFilmReviews = async (filmId) => {
  const response = await axios.get(
    `/movie/${filmId}/reviews?api_key=${apiKey}`
  );
  return response.data;
};

export const getCastList = async (filmId) => {
  const response = await axios.get(
    `/movie/${filmId}/credits?api_key=${apiKey}`
  );
  return response.data;
};

export const getFilmByKeyword = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${query}`
  );
  return response.data;
};
