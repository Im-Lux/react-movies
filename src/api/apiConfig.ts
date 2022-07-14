const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: process.env.REACT_APP_API_KEY,
  coverImage: (imagePath: string) =>
    `https://image.tmdb.org/t/p/original${imagePath}`,
  posterImage: (imagePath: string) =>
    `https://image.tmdb.org/t/p/w500${imagePath}`,
};

export default apiConfig;
