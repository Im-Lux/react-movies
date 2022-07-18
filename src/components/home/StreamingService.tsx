import { FC } from "react";
import "./streaming-service.scss";

type StreamingServiceProps = {
  name: string;
  imagePath: string;
  url: string;
};

const StreamingService: FC<StreamingServiceProps> = ({
  name,
  imagePath,
  url,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="streaming-service">
        <img src={require(`../../assets/images/${imagePath}`)} alt={name} />
      </div>
    </a>
  );
};

export default StreamingService;
