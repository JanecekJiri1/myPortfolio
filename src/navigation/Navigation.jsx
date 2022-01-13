import React from "react";
import { Link } from "react-router-dom";
import csFlag from "../assets/cz.png";
import enFlag from "../assets/en.png";

import classes from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navigation = () => {
  const { t } = useTranslation();
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
            <Link to="/">{t("navigation_about")}</Link>
          </li>
          <li className={classes.liNavigation}>
            <Link to="/projects">{t("projekts_")}</Link>
          </li>
          <li className={classes.liNavigation}>
            <Link to="/contact">{t("navigation_contact")}</Link>
          </li>
          <img src={csFlag} alt="czech flag icon" onClick={() => i18next.changeLanguage("cs")} className={classes.flag} />
          <img src={enFlag} alt="english flag icon" onClick={() => i18next.changeLanguage("en")} className={classes.flag} />{" "}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
