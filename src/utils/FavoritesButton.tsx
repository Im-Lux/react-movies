import { FC } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useFavorites } from "../context/favorites-context";
import { Category } from "../models/Enums";
import "./favorites-button.scss";

type Item = {
  id: string;
  category: Category;
  backdrop_path: string;
  title: string;
};

type Props = {
  item: Item;
};

const FavoritesButton: FC<Props> = ({ item }) => {
  const { isItemInFavorites, addItemToFavorites, removeItemFromFavorites } =
    useFavorites();

  const itemToFavoritesHandler = () => {
    if (isItemInFavorites(item.id.toString())) {
      removeItemFromFavorites(item.id.toString());
    } else {
      addItemToFavorites({ ...item });
    }
  };

  return (
    <>
      {!isItemInFavorites(item?.id.toString()!) ? (
        <span className="favorites-button" onClick={itemToFavoritesHandler}>
          <BsSuitHeart color="red" size="2.5rem" />
          Add to Favs
        </span>
      ) : (
        <span className="favorites-button" onClick={itemToFavoritesHandler}>
          <BsSuitHeartFill color="red" size="2.5rem" />
          Remove from Favs
        </span>
      )}
    </>
  );
};

export default FavoritesButton;
