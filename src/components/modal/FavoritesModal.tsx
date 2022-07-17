import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./favorites-modal.scss";
import { Button } from "react-bootstrap";
import { BsSuitHeartFill } from "react-icons/bs";
import { useFavorites } from "../../context/favorites-context";
import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import CloseButton from "../utils/CloseButton";

const FavoritesModal: FC = () => {
  const favoritesRef = useRef<HTMLDivElement>(null);
  const { favorites, closeFavorites, removeItemFromFavorites } = useFavorites();
  const navigation = useNavigate();

  useEffect(() => {
    const addAnimation = setTimeout(() => {
      favoritesRef.current?.classList.add("active");
    }, 10);

    return () => {
      clearTimeout(addAnimation);
    };
  }, []);

  return (
    <div ref={favoritesRef} className="favorites">
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
                  variant="info"
                  onClick={() => {
                    navigation(`/discovery/${fav.category}/${fav.id}`);
                    closeFavorites();
                  }}
                >
                  Watch
                </Button>
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

      <CloseButton onClick={closeFavorites} />
    </div>
  );
};

export default FavoritesModal;
