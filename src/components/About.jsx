import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Hai, aku Nathan. Masih pemula di dunia programming, jadi masih sering
          belajar dari tutorial dan nyoba-nyoba sendiri. Kadang berhasil, kadang
          juga bikin error yang gak ngerti kenapa.
        </p>
        <p>
          Sekarang aku lagi kuliah di STMIK Mardira Indonesia, dan lagi sibuk
          ngerjain tugas-tugas perkuliahan juga. Walau capek, tapi tetap
          semangat belajar ngoding pelan-pelan
        </p>
        <p>
          Jujur, aku masih lebih jago main game daripada ngoding, tapi ya tetep
          dicoba aja. Selain itu, aku juga suka baca komik, terutama yang
          plotnya seru dan gambarnya keren.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
        </div>
      </div>
    </section>
  );
}

export default About;
