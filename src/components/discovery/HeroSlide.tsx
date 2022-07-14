import { FC, useEffect, useState } from "react";
import requestsApi from "../../api/requestsApi";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../../models/Movie";
import HeroSlideItem from "./HeroSlideItem";
import { MovieType } from "../../models/Enums";

const HeroSlide: FC = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState<Movie[]>([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const params = { page: 3 };

      try {
        const response = await requestsApi.getMovies(MovieType.Popular, {
          params,
        });
        setMovieItems(response.data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <section className="hero_slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
      >
        {movieItems.map((elem, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                movie={elem}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlide;
