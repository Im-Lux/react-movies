import { FC } from "react";
import { CircleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "./not-found.scss";

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <CircleLoader color="#e50914" size={150} />
      <h2>Ooops. Something went wrong.</h2>
      <p>You are looking for something that doesn't exist.</p>
      <p>
        Go back to <Link to="/discovery">discovery page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
