import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import ContactIn from "../components/contactIn/ContactIn";

import classes from "./MainPage.module.css";

const mainPage = () => {
  return (
    <div className={classes.mainPageStyles}>
      <About />
      <Projects />
      <ContactIn />
    </div>
  );
};

export default mainPage;
