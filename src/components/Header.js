import '../css/Header.css';
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <img src="/assets/logo.jpg" alt="Little Lemon Logo" />
       <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/reservations">RESERVATIONS</a></li>
          <li><a href="/online">ORDER ONLINE</a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;