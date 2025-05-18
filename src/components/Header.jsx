// Header.jsx
import profilePicture from "../assets/profile-picture1.png";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
import ParticlesBackground from "./ParticlesBackground";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <header>
      <ParticlesBackground />
      <div className="animated-bg">
        <div className="header-jumbotron">
          <img src={profilePicture} className="glow-img" alt="Foto Profil" />
          <h3 className="fade-in-delay-1">Muhammad Nathan F</h3>
          <p className="fade-in-delay-2">
            <Typewriter
              words={[
                "Mahasiswa STMIK Mardira Indonesia",
                "Web Developer",
                "Gamer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="socialMedia fade-in-delay-3">
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
      </div>
    </header>
  );
}

export default Header;
