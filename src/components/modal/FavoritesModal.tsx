import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ScrollContainer from "react-indiana-drag-scroll";
import "./favorites-modal.scss";
import { Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BsHeartFill, BsSuitHeartFill } from "react-icons/bs";
import { useFavorites } from "../../context/favorites-context";
import apiConfig from "../../api/apiConfig";

const FavoritesModal: FC = () => {
  const { favorites, closeFavorites, removeItemFromFavorites } = useFavorites();

  return (
    <div className="favorites">
      <h2>
        Your Favs <BsSuitHeartFill color="red" />
      </h2>
      {favorites.length === 0 && (
        <div className="favorites__nocontent">
          <h2>No Favorites yet!</h2>
        </div>
      )}
      <Swiper
        grabCursor={true}
        direction={"vertical"}
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {favorites.map((fav, index) => (
          <SwiperSlide key={index}>
            <div className="favorites__item">
              <div className="favorites__item__image">
                <img
                  src={`${apiConfig.coverImage(fav.backdrop_path)}`}
                  alt={fav.title}
                />
              </div>

              <div className="favorites__item__title">
                <h3>{fav.title}</h3>
              </div>

              <div className="favorites__item__action">
                <Button
                  variant="danger"
                  onClick={() => removeItemFromFavorites(fav.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="info__container__close" onClick={() => closeFavorites()}>
        <AiOutlineClose size="1.5rem" color="yellow" />
      </div>
    </div>
  );
};

export default FavoritesModal;
