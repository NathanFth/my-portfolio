import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import { IoLogoWebComponent } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<IoLogoWebComponent />}
          >
            <h3 className="vertical-timeline-element-title">
              Belajar Web Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ciwaruga, Bandung
            </h4>
            <p>
              Ngikutin tutorial YouTube dan latihan bikin website pakai HTML dan
              CSS. Pernah nyoba bikin form login, project showcase, dan contact
              form sederhana.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<IoLogoWebComponent />}
          >
            <h3 className="vertical-timeline-element-title">
              Belajar Web Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ciwaruga, Bandung
            </h4>
            <p>
              Ngikutin tutorial YouTube dan latihan bikin website pakai HTML dan
              CSS. Pernah nyoba bikin form login, project showcase, dan contact
              form sederhana.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
