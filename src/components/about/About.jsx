import React, { useState } from "react";

import classes from "./About.module.css";
import myPhoto from "../../assets/myFoto.png";

import SeeMorePage from "./seeMore/SeeMorePage";
import { useTranslation } from "react-i18next";

const About = () => {
  const [hideCv, setHideCv] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.aboutPageStyles}>
        <div className={classes.leftSideFoto}>
          <img className={classes.myPhotoStyles} src={myPhoto} alt="" />
        </div>

        <div className={classes.rightSideText}>
          <h2>{t("about_h2")}</h2>
          <p>{t("about_mainText")}</p>
          <div className={classes.seeMore}>
            <h2>{t("about_bit_more")}</h2>
            <a className={classes.btnSeeMore} onClick={() => setHideCv(!hideCv)}>
              {t("about_btn")}
            </a>
          </div>
        </div>
      </div>

      {hideCv ? <SeeMorePage setHideCv={setHideCv} /> : null}
    </div>
  );
};

export default About;
