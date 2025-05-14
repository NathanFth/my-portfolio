import { useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Zyunth</Link>
        </div>
        <button onClick={toggleMenu} className="menu-toggle">
          {menuActive ? <IoMdClose /> : <FaBars />}
        </button>
        <div className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <HashLink to="/#portfolio">Project</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
