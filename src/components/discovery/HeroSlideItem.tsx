import { FC } from "react";
import "./hero-slide-item.scss";
import { Button } from "react-bootstrap";
import apiConfig from "../../api/apiConfig";
import { Movie } from "../../models/Movie";
import { useNavigate } from "react-router-dom";

type HeroSlideItemMovieProps = {
  movie: Movie;
  className: string;
};

const HeroSlideItem: FC<HeroSlideItemMovieProps> = ({ movie, className }) => {
  const navigation = useNavigate();

  const coverImage = apiConfig.coverImage(
    movie.backdrop_path || movie.poster_path
  );
  const posterImage = apiConfig.posterImage(
    movie.poster_path || movie.backdrop_path
  );

  const goToDetailsHandler = () => {
    navigation(`/discovery/movie/${movie.id}`);
  };

  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="hero-slide__item__content">
        <div className="hero-slide__item__content__poster">
          <img
            src={posterImage || require(`../../assets/images/not-found.png`)}
            alt={movie.title}
          />
        </div>
        <div className="hero-slide__item__content__info">
          <h1 className="title">{movie.title}</h1>
          <div className="overview">{movie.overview}</div>
          <div className="btns">
            <Button
              className="btn-primary"
              style={{ padding: "1rem 2rem" }}
              variant="dark"
              onClick={goToDetailsHandler}
            >
              Watch now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
