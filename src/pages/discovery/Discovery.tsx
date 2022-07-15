import { FC } from "react";
import { Container } from "react-bootstrap";
import HeroSlide from "../../components/discovery/HeroSlide";
import MovieListContainer from "../../components/discovery/MovieListContainer";
import InfoModal from "../../components/modal/InfoModal";
import { Category, MovieType, TvType } from "../../models/Enums";

const Discovery: FC = () => {
  return (
    <>
      <HeroSlide />

      <Container>
        <MovieListContainer
          title="Trending Movies"
          category={Category.Movie}
          type={MovieType.Popular}
        />

        <MovieListContainer
          title="Trending TV Shows"
          category={Category.Tv}
          type={TvType.Popular}
        />

        <MovieListContainer
          title="Upcoming Movies"
          category={Category.Movie}
          type={MovieType.Upcoming}
        />

        <MovieListContainer
          title="Top Rated TV Shows"
          category={Category.Tv}
          type={TvType.TopRated}
        />
      </Container>

      {/* <InfoModal /> */}
    </>
  );
};

export default Discovery;
