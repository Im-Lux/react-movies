import { FC } from "react";
import "./close-button.scss";
import { AiOutlineClose } from "react-icons/ai";

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <div className="close-btn" onClick={onClick}>
      <AiOutlineClose size="1.5rem" color="yellow" />
    </div>
  );
};

export default CloseButton;
