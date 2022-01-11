import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes["left-size"]}>
        <div className={classes.myName}>
          <Link to="/">Jiří Janeček</Link>
        </div>
      </div>
      <div className={classes["right-size"]}>
        <ul className={classes.ulNavigation}>
          <li className={classes.liNavigation}>
            <Link to="/">About</Link>
          </li>
          <li className={classes.liNavigation}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
