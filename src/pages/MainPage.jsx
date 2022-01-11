import About from "../components/about/About";

import classes from "./MainPage.module.css";

const mainPage = () => {
  return (
    <div className={classes.mainPageStyles}>
      <About />
    </div>
  );
};

export default mainPage;
