import { FC } from "react";
import "./streaming-service.scss";

type StreamingServiceProps = {
  name: string;
  imagePath: string;
};

const StreamingService: FC<StreamingServiceProps> = ({ name, imagePath }) => {
  return (
    <div className="streaming-service">
      <img src={require(`../../assets/images/${imagePath}`)} alt={name} />
    </div>
  );
};

export default StreamingService;
