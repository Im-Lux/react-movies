import { FC, useEffect, useRef } from "react";
import "./navbar.scss";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/justwatch-logo.webp";
import FavoritesModal from "../modal/FavoritesModal";
import NavbarSearch from "./NavbarSearch";
import { useFavorites } from "../../context/favorites-context";

const Navbar: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { isModalShown, showFavorites } = useFavorites();

  useEffect(() => {
    const resizeNavbar = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", resizeNavbar);

    return () => {
      window.removeEventListener("scroll", resizeNavbar);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="navbar__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/discovery">Discovery</Link>
          </li>
        </ul>

        <div className="navbar__search">
          {/* <input type="text" placeholder="search movies..." /> */}
          <NavbarSearch />
        </div>

        <div className="navbar__favorite" onClick={() => showFavorites()}>
          <span>
            <BsSuitHeartFill size="2rem" color="red" /> Favorites
          </span>
        </div>
      </nav>

      {isModalShown && <FavoritesModal />}
    </header>
  );
};

export default Navbar;
