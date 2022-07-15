import { FC, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./info-modal.scss";
import { useModalInfo } from "../../context/modal-info-context";
import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import FavoritesButton from "../../utils/FavoritesButton";

const InfoModal: FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { item, closeModal } = useModalInfo();
  const navigation = useNavigate();

  useEffect(() => {
    const addAnimation = setTimeout(() => {
      modalRef.current?.classList.add("active");
      console.log("hej");
    }, 10);

    return () => {
      clearTimeout(addAnimation);
    };
  }, []);

  const goToDetailsHandler = () => {
    navigation(`/discovery/${item.category}/${item.id}`);
    closeModal();
  };

  return (
    <div ref={modalRef} className={`info__container`}>
      <div className="info__container__content">
        <div className="info__container__content__img">
          <img
            src={`${apiConfig.posterImage(item.poster_path)}`}
            alt={item.title}
          />
        </div>

        <div className="info__container__content__info">
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
          <div className="info__container__content__info__actions">
            <Button
              className="fw-bold px-4 btn-primary"
              variant="light"
              onClick={goToDetailsHandler}
            >
              PLAY NOW
            </Button>

            {item && (
              <FavoritesButton
                item={{
                  id: item?.id.toString()!,
                  backdrop_path: item?.backdrop_path!,
                  title: item?.title!,
                  category: item.category,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="info__container__image"
        style={{
          backgroundImage: `url(${apiConfig.coverImage(item.backdrop_path)})`,
        }}
      ></div>

      <div className="info__container__close" onClick={() => closeModal()}>
        <AiOutlineClose size="1.5rem" color="yellow" />
      </div>
    </div>
  );
};

export default InfoModal;
