import { FC, useEffect, useState } from "react";
import "./actors-list.scss";
import { useParams } from "react-router-dom";
import requestsApi from "../../api/requestsApi";
import { Category } from "../../models/Enums";
import apiConfig from "../../api/apiConfig";

type Actor = {
  id: number;
  name: string;
  profile_path: string;
};

const ActorsList: FC = () => {
  const { category, id } = useParams();
  const [actors, setActors] = useState<Actor[]>();

  useEffect(() => {
    const getActors = async () => {
      const params = {};
      const response = await requestsApi.getCredits(category as Category, id!, {
        params,
      });

      setActors(response.data.cast.slice(0, 5));
    };

    getActors();
  }, [category, id]);

  return (
    <div className="actors">
      <h3>Actors</h3>
      <div className="actors__container">
        {actors?.map((actor, index) => (
          <div className="actors__container__item" key={index}>
            <div
              className="actors__container__item__image"
              style={{
                backgroundImage: `url(${apiConfig.posterImage(
                  actor.profile_path
                )})`,
              }}
            ></div>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsList;
