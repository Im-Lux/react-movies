import { FC, createContext, useContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type Favs = {
  id: string;
  backdrop_path: string;
  title: string;
};

type Favorites = {
  favorites: Favs[];
  isModalShown: boolean;
  isItemInFavorites: (id: string) => boolean;
  addItemToFavorites: (item: Favs) => void;
  removeItemFromFavorites: (id: string) => void;
  showFavorites: () => void;
  closeFavorites: () => void;
};

const FavoritesContext = createContext({} as Favorites);

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesContextProvider: FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favs[]>([]);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  console.log(favorites);

  const showFavorites = () => {
    setIsModalShown(true);
  };

  const closeFavorites = () => {
    setIsModalShown(false);
  };

  const addItemToFavorites = (item: Favs) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites((prevstate) => [...prevstate, item]);
    }
  };

  const removeItemFromFavorites = (id: string) => {
    setFavorites((prevstate) => prevstate.filter((fav) => fav.id !== id));
  };

  const isItemInFavorites = (id: string) => {
    return favorites.some((fav) => fav.id === id) ? true : false;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isItemInFavorites,
        addItemToFavorites,
        removeItemFromFavorites,
        isModalShown,
        showFavorites,
        closeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
