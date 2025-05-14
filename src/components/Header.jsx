import profilePicture from "../assets/profile-picture1.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Muhammad Nathan F</h3>
        <p>Programmer - Gamer - Reader</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/mhmmdnathanf?igsh=MWw2dzBvZzc2OXBkOA==">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@mnthanf?_t=ZS-8wLLTS2eo0V&_r=1">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/share/14fN39ckmu/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
