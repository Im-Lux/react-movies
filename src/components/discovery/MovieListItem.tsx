import { FC } from "react";
import "./movie-list-item.scss";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { Movie } from "../../models/Movie";
import { Button } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Category } from "../../models/Enums";

type MovieListItemProps = {
  movie: Movie;
  category: Category;
};

const MovieListItem: FC<MovieListItemProps> = ({ movie, category }) => {
  const navigation = useNavigate();

  const posterImage = apiConfig.posterImage(
    movie.poster_path || movie.backdrop_path
  );

  const goToDetailsHandler = () => {
    navigation(`/discovery/${category}/${movie.id}`);
  };

  return (
    <>
      <div
        className="movie-item mt-3 mb-3"
        style={{
          backgroundImage: `url(${
            posterImage || require(`../../assets/images/not-found.png`)
          })`,
        }}
      >
        <span className="inner-favorites" onClick={() => console.log("first")}>
          Favs <BsSuitHeart size="2rem" />
        </span>

        <Button
          className="inner-action fw-bold px-4"
          variant="warning"
          onClick={goToDetailsHandler}
        >
          See More
        </Button>
      </div>
      <h3 className="fs-5 mt-2 text-left">{movie.title || movie.name}</h3>
    </>
  );
};

export default MovieListItem;
