import { portfolioList } from "../data/DataPortfolio";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Project</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} alt={`Project ${item.title}`} />
                  <p className="project-title">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
