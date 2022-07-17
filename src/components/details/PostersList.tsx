import { FC, useEffect, useState } from "react";
import "./posters-list.scss";
import requestsApi from "../../api/requestsApi";
import { useParams } from "react-router-dom";
import { Category } from "../../models/Enums";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";

type Image = {
  file_path: string;
};

const PostersList: FC = () => {
  const { category, id } = useParams();
  const [images, setImages] = useState<Image[]>();

  useEffect(() => {
    const getImages = async () => {
      const params = {};
      const response = await requestsApi.getImages(category as Category, id!, {
        params,
      });

      setImages(response.data.backdrops.slice(0, 10));
    };

    getImages();
  }, [category, id]);

  return (
    <div className="posters mt-3">
      <h3>Posters</h3>
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <a
              href={`${apiConfig.coverImage(image.file_path)}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="posters__item"
                style={{
                  backgroundImage: `url(${apiConfig.coverImage(
                    image.file_path
                  )})`,
                }}
              ></div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostersList;
