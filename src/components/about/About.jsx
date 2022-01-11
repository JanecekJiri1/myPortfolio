import React, { useState } from "react";

import classes from "./About.module.css";
import myPhoto from "../../assets/myFoto.png";

import SeeMorePage from "./seeMore/SeeMorePage";

const About = () => {
  const [hideCv, setHideCv] = useState(false);
  return (
    <div>
      <div className={classes.aboutPageStyles}>
        <div className={classes.leftSideFoto}>
          <img className={classes.myPhotoStyles} src={myPhoto} alt="" />
        </div>

        <div className={classes.rightSideText}>
          <h2>About me</h2>
          <p>
            Hello, my name is Jirka. For the last year, I have been learning programming to find a job as a front-end developer. At work, I was
            fascinated by the fact that I can constantly improve myself, learn new things and be able to be my slightly better version every day. I
            have gone through several courses and I realize that they do not make me a programmer. However, I also know that what I lack in my
            experience, I try to catch up with my efforts so that I can be considered a valid member of the team.
          </p>
          <div className={classes.seeMore}>
            <h2>Little bit more</h2>
            <a className={classes.btnSeeMore} onClick={() => setHideCv(!hideCv)}>
              See more
            </a>
          </div>
        </div>
      </div>

      {hideCv ? <SeeMorePage setHideCv={setHideCv} /> : null}
    </div>
  );
};

export default About;
