import classes from "./Projects.module.css";
import LPage from "../../assets/Lp2.png";
import ShoppE from "../../assets/shopp.png";
import Food from "../../assets/food2a.png";

const Projects = () => {
  return (
    <div className={classes.projectsStyles}>
      <h2>Projects</h2>
      <div className={classes.topLine}>
        <div>
          <a href="https://lp-noawesome.herokuapp.com/" target="_blank" rel="noreferrer">
            <h3> Landing page </h3>
            <div>
              <img className={classes.box} src={LPage} alt="just landing page" />
            </div>
          </a>
          <a className={classes.gitHub} href="https://github.com/JanecekJiri1/projekt1-land" target="_blank" rel="noreferrer">
            <h3 className={classes.gitOpen}>GitHub code</h3>
          </a>
        </div>
        <div>
          <a href=" https://elektronic-shop.herokuapp.com/" target="_blank" rel="noreferrer">
            <h3>Commerce with elektronic</h3>

            <div>
              <img src={ShoppE} alt="click and go to electronic store" className={classes.box} />
            </div>
          </a>
          <a className={classes.gitHub} href="https://github.com/JanecekJiri1/projekt2-elektro" target="_blank" rel="noreferrer">
            <h3 className={classes.gitOpen}>GitHub code</h3>
          </a>
        </div>

        <div>
          <a href="https://food-order-portfolio.herokuapp.com/" target="_blank" rel="noreferrer">
            <h3> Food order app </h3>
            <div>
              <img src={Food} className={classes.box} alt="click and go oder what you like" />
            </div>
          </a>

          <a className={classes.gitHub} href="https://github.com/JanecekJiri1/food-oder" target="_blank" rel="noreferrer">
            <h3 className={classes.gitOpen}>GitHub code</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
