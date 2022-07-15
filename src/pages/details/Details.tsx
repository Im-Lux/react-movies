import { FC, useEffect, useState } from "react";
import "./details.scss";
import { useParams } from "react-router-dom";
import requestsApi from "../../api/requestsApi";
import { Category, MovieType, TvType } from "../../models/Enums";
import { Movie } from "../../models/Movie";
import { Button, Container } from "react-bootstrap";
import apiConfig from "../../api/apiConfig";
import {
  BsDot,
  BsPlayFill,
  BsSuitHeartFill,
  BsSuitHeart,
} from "react-icons/bs";
import ActorsList from "../../components/details/ActorsList";
import PostersList from "../../components/details/PostersList";
import MovieListContainer from "../../components/discovery/MovieListContainer";
import VideoModal from "../../components/modal/VideoModal";

type Genre = {
  id: number;
  name: string;
};

type Item = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  overview: string;
  release_date: string;
  first_air_date: string;
  runtime: number;
  number_of_seasons: number;
  title: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

const Details: FC = () => {
  const { category, id } = useParams();
  const similar = category === "tv" ? TvType.Similar : MovieType.Similar;
  const [item, setItem] = useState<Item>();
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const showVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const getDetails = async () => {
      const params = {};
      const response = await requestsApi.getDetails(category as Category, id!, {
        params,
      });

      setItem(response.data);
    };

    getDetails();
  }, [category, id]);

  function calculateLength(): string {
    const hrs = Math.floor(item?.runtime! / 60);
    let mins = item?.runtime! % 60;

    return `${hrs}h ${mins < 10 ? "0" : ""}${mins}min`;
  }

  function getGenres(): string {
    let names: string[] = [];
    item?.genres.forEach((item) => names.push(item.name));

    return names.slice(0, 3).join(", ");
  }

  return (
    <>
      <section
        className="details"
        style={{
          backgroundImage: `url(${apiConfig.coverImage(
            item?.backdrop_path! || item?.poster_path!
          )})`,
        }}
      >
        <div className="details__container">
          <div className="details__container__about">
            <div className="details__container__about__content">
              <h1>{item?.title || item?.name}</h1>
              <div className="details__container__about__content__info">
                <p>
                  ⭐ {item?.vote_average} <span>| {item?.vote_count}</span>
                </p>

                <div className="details__container__about__content__info__numbers">
                  <p>
                    {category === "movie"
                      ? calculateLength()
                      : `${item?.number_of_seasons} seasons`}
                  </p>
                  <p>
                    <BsDot size="1.25rem" />
                  </p>
                  <p>{getGenres()}</p>
                  <p>
                    <BsDot size="1.25rem" />
                  </p>
                  <p>
                    {category === "movie"
                      ? item?.release_date.slice(0, 4)
                      : item?.first_air_date.slice(0, 4)}
                  </p>
                </div>
              </div>

              <p>{item?.overview}</p>
            </div>

            <div className="details__container__about__actions">
              <Button
                className="btn-primary px-4 py-2 fw-bold"
                variant="warning"
                onClick={showVideoModal}
              >
                <BsPlayFill size="1.25rem" /> PLAY NOW
              </Button>
              <Button className="px-3" variant="dark" onClick={showVideoModal}>
                TRAILER
              </Button>
              <span>
                <BsSuitHeart color="red" size="2.5rem" />
                Add to Favorites
              </span>
            </div>
          </div>

          <div className="details__container__media">
            <ActorsList />
            <PostersList />
          </div>
        </div>
      </section>

      <Container className="mt-5">
        <MovieListContainer
          title={`Similar ${category}s`}
          category={category as Category}
          type={similar}
          id={id}
        />
      </Container>

      {showVideo && (
        <VideoModal
          id={id!}
          category={category as Category}
          onClose={closeVideoModal}
        />
      )}
    </>
  );
};

export default Details;
