import '../css/Header.css';
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/reserve">RESERVATIONS</Link></li> {/* Updated */}
          <li><Link to="/online">ORDER ONLINE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;