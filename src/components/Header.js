import '../css/Header.css';

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path.startsWith("/#")) {
      return location.hash === path.replace("/", "");
    }
    return location.pathname === path && location.hash === "";
  };

  return (
    <header>
      <img src="/assets/logo.jpg" alt="Little Lemon Logo" />
       <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <Link className={isActive("/") ? "active" : ""} to="/">HOME</Link>
          </li>
          <li>
            <HashLink className={isActive("/#about") ? "active" : ""} smooth to="/#about">ABOUT</HashLink>
          </li>
          <li>
            <Link className={isActive("/reserve") ? "active" : ""} to="/reserve">RESERVATIONS</Link>
          </li>
          <li>
            <Link className={isActive("/online") ? "active" : ""} to="/online">ORDER ONLINE</Link>
          </li>
          <li>
            <Link className={isActive("/login") ? "active" : ""} to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;