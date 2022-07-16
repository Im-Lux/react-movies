import axiosClient from "./axiosClient";
import { Category, MovieType, TvType } from "../models/Enums";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const requestsApi = {
  getMovies: (type: MovieType, params: object) => {
    const url = "movie/" + type;

    return axiosClient.get(url, params);
  },

  getTvShows: (type: TvType, params: object) => {
    const url = "tv/" + type;

    return axiosClient.get(url, params);
  },

  getDetails: (category: Category, id: string, params: object) => {
    const url = category + "/" + id;

    return axiosClient.get(url, params);
  },

  getCredits: (category: Category, id: string, params: object) => {
    const url = category + "/" + id + "/credits";

    return axiosClient.get(url, params);
  },

  getImages: (category: Category, id: string, params: object) => {
    const url = category + "/" + id + "/images";

    return axiosClient.get(url, params);
  },

  getSimilar: (
    category: Category,
    type: MovieType | TvType,
    id: string,
    params: object
  ) => {
    const url = category + "/" + id + "/" + type;

    return axiosClient.get(url, params);
  },

  getVideos: (category: Category, id: string, params: object) => {
    const url = category + "/" + id + "/videos";

    return axiosClient.get(url, params);
  },

  getSearch: (category: Category, params: object) => {
    const url = "search/" + category;

    return axiosClient.get(url, params);
  },
};

export default requestsApi;
