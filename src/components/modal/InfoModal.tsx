import { FC } from "react";
import { Button } from "react-bootstrap";
import { BsSuitHeart } from "react-icons/bs";
import "./info-modal.scss";

const InfoModal: FC = () => {
  return (
    <div className="info__container">
      <div className="info__container__content">
        <div className="info__container__content__img"></div>

        <div className="info__container__content__info">
          <h2>TITLE</h2>
          <p>description</p>
          <div className="info__container__content__info__actions">
            <Button>PLAY NOW</Button>
            <span>
              <BsSuitHeart color="red" size="2.5rem" />
              Add to Favorites
            </span>
          </div>
        </div>
      </div>

      <div className="info__container__image"></div>
    </div>
  );
};

export default InfoModal;
