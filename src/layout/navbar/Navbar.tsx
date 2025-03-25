import "./navbar.css";
import { useState } from "react";
import DesktopLogo from "../../components/icons/desktop-logo";
import MobileLogo from "../../components/icons/mobile-logo";
import ThemeIcon from "../../components/icons/theme-icon";
import MobileMenu from "../../components/icons/mobile-menu";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleButton, setToggleButton] = useState(0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleFunction = (index: number) => {
    setToggleButton(index);
  };
  return (
    <nav className="container" style={{ padding: "8px 24px" }}>
      <div className="desktop-logo">
        <DesktopLogo />
      </div>
      <div className="mobile-logo">
        <MobileLogo />
      </div>
      <div className="links-side">
        <ul className="nav-links">
          <Link to="/">
            <li
              className={toggleButton === 1 ? "active" : ""}
              onClick={() => toggleFunction(1)}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={toggleButton === 2 ? "active" : ""}
              onClick={() => toggleFunction(2)}
            >
              About us
            </li>
          </Link>
          <Link to="/servics">
            <li
              className={toggleButton === 3 ? "active" : ""}
              onClick={() => toggleFunction(3)}
            >
              Services
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={toggleButton === 4 ? "active" : ""}
              onClick={() => toggleFunction(4)}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div onClick={() => toggleMenu()} className="mobile-menu">
          <MobileMenu />
        </div>

        <ThemeIcon />
        {isOpen && (
          <ul className="responsive-nav-links">
            <Link to="/" onClick={() => toggleMenu()}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={() => toggleMenu()}>
              <li>About us</li>
            </Link>
            <Link to="/servics" onClick={() => toggleMenu()}>
              <li>Services</li>
            </Link>
            <Link to="/contact" onClick={() => toggleMenu()}>
              <li>Contact</li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
