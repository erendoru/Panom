import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./Profile";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const bars = <FontAwesomeIcon icon={faBars} className="icon" />;
  const closed = <FontAwesomeIcon icon={faTimes} className="icon" />;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/map">
          <a className="navbar-logo">
            LOGO <i className="logo-side">Map</i>
          </a>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? closed : bars}
        </div>
        <ul className={click ? "nav-menu-mobile" : "nav-menu"}>
          <li className="nav-item">
            <Link href="about" onClick={closeMenu} className="nav-links">
              Pano Listele
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" onClick={closeMenu} className="nav-links">
              Pano Tasarla
            </Link>
          </li>
          <li className="nav-item">
            <Link href="about" onClick={closeMenu} className="nav-links">
              Blog
            </Link>
          </li>
          {click && (
            <li className="nav-item">
              <Link href="/settings" onClick={closeMenu} className="nav-links">
                Profil
              </Link>
            </li>
          )}
        </ul>
        <div className="nav-profile">
          <Profile>
            <>
              <DropDownMenu />
            </>
          </Profile>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
