import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import requestsApi from "../../api/requestsApi";
import { Category, MovieType, TvType } from "../../models/Enums";
import { Movie } from "../../models/Movie";
import "./movie-list.scss";
import MovieListItem from "./MovieListItem";

type MovieListProps = {
  category: Category;
  type: MovieType | TvType;
  id?: string;
};

const MovieList: FC<MovieListProps> = ({ category, type, id }) => {
  const [movieItems, setMovieItems] = useState<Movie[]>([]);

  useEffect(() => {
    const getItems = async () => {
      let response = null;
      const params = { page: 1 };

      if (type === MovieType.Similar || type === TvType.Similar) {
        response = await requestsApi.getSimilar(category, type, id!, {
          params,
        });
      } else {
        if (category === Category.Movie) {
          response = await requestsApi.getMovies(type as MovieType, { params });
        } else {
          response = await requestsApi.getTvShows(type as TvType, { params });
        }
      }

      setMovieItems(response.data.results);
    };

    getItems();
  }, [category, id, type]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieListItem movie={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
