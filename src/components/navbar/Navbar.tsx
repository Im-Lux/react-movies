import React, { FC, LegacyRef, useEffect, useRef } from "react";
import "./navbar.scss";
import { Container, Form } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/justwatch-logo.webp";

const Navbar: FC = () => {
  const headerRef = useRef<HTMLElement>(null);

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
          <input type="text" placeholder="search movies..." />
        </div>

        <div className="navbar__favorite">
          <BsSuitHeartFill /> Favorite
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
