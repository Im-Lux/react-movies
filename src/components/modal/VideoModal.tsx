import { FC, useEffect, useState } from "react";
import requestsApi from "../../api/requestsApi";
import { Category } from "../../models/Enums";
import "./video-modal.scss";

type VideoModalProps = {
  id: string;
  category: Category;
  onClose: () => void;
};

const VideoModal: FC<VideoModalProps> = ({ id, category, onClose }) => {
  const [source, setSource] = useState<string>();

  useEffect(() => {
    const params = {};
    const getVideo = async () => {
      const response = await requestsApi.getVideos(category, id, { params });

      setSource(response.data.results[0].key);
    };

    getVideo();
  }, [category, id]);

  return (
    <div className="video__container" onClick={onClose}>
      <div className="video__container__modal">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${source}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
