import { FC } from "react";
import { Category, MovieType, TvType } from "../../models/Enums";
import MovieList from "./MovieList";

type MovieListContainerProps = {
  title: string;
  category: Category;
  type: MovieType | TvType;
  id?: string;
};

const MovieListContainer: FC<MovieListContainerProps> = ({
  title,
  category,
  type,
  id,
}) => {
  return (
    <div className="mb-3">
      <h2>{title}</h2>

      <MovieList category={category} type={type} id={id} />
    </div>
  );
};

export default MovieListContainer;
