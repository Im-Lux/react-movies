import { FC, ReactNode, createContext, useState, useContext } from "react";
import { Category } from "../models/Enums";

type Props = {
  children: ReactNode;
};

type Item = {
  id: string;
  category: Category;
  poster_path: string;
  title: string;
  overview: string;
  backdrop_path: string;
};

type ModalInfo = {
  item: Item;
  isShown: boolean;
  showModal: (item: Item) => void;
  closeModal: () => void;
};

const ModalInfoContext = createContext({} as ModalInfo);

export const useModalInfo = () => {
  return useContext(ModalInfoContext);
};

export const ModalInfoContextProvider: FC<Props> = ({ children }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({} as Item);

  const showModal = (item: Item) => {
    setIsShown(true);
    setItem(item);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  return (
    <ModalInfoContext.Provider
      value={{
        item,
        isShown,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalInfoContext.Provider>
  );
};
