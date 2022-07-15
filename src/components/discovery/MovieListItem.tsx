import { FC, useState } from "react";
import "./movie-list-item.scss";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { Movie } from "../../models/Movie";
import { Button } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Category } from "../../models/Enums";
import InfoModal from "../modal/InfoModal";
import { useModalInfo } from "../../context/modal-info-context";

type MovieListItemProps = {
  movie: Movie;
  category: Category;
};

const MovieListItem: FC<MovieListItemProps> = ({ movie, category }) => {
  const { showModal } = useModalInfo();

  const posterImage = apiConfig.posterImage(
    movie.poster_path || movie.backdrop_path
  );

  const showModalHandler = () => {
    showModal({
      id: movie.id.toString(),
      category: category,
      title: movie.title || movie.name,
      overview: movie.overview,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    });
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
        onClick={showModalHandler}
      >
        <h3 className="movie-item__title fs-5 mt-2 text-left">
          {movie.title || movie.name}
        </h3>
      </div>
    </>
  );
};

export default MovieListItem;
