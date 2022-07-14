import { FC } from "react";
import "./features-container.scss";

type FeaturesContainerProps = {
  imagePath: string;
  quote: string;
  title: string;
  description: string;
  order?: number;
};

const FeaturesContainer: FC<FeaturesContainerProps> = ({
  imagePath,
  quote,
  title,
  description,
  order,
}) => {
  return (
    <div className="features__container">
      <div className="features__container__image" style={{ order: order }}>
        <img src={require(`../../assets/images/${imagePath}`)} alt="cover" />
      </div>

      <div className="features__container__content">
        <span>{quote}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesContainer;
