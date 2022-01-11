import classes from "./SeeMorePage.module.css";

const SeeMorePage = ({ setHideCv }) => {
  return (
    <div className={classes.seeMorePage}>
      <h2 className={classes.topHeader}>Something more about me</h2>
      <div className={classes.seeMoreStyles}>
        <div className={classes.seeLeftSide}>
          <div className="textResumeLeft">
            <p>
              <h3>Education</h3>2008-2012 SoŠ and SoU Strážnice Clothing, graduated
            </p>
            <br />
            <p>
              <h3>Work experience:</h3>
              Caring for people and children in UK. Which has little to do with programming, but it gave me character qualites like responsibility,
              punctuality, a positive approach to work, professionalism, consistency.
            </p>
          </div>
        </div>
        <div className={classes.seeRightSide}>
          <ul className={classes.languageUl}>
            <h3>Language skills</h3>
            <li>
              <strong>Czech language</strong> - native speaker
            </li>
            <li>
              <strong>English language</strong> - advanced
            </li>
          </ul>
          <br />
          <h3>Hobbies:</h3>
          <p>
            Theater, movies - I used to be an actor,
            <br /> music, self-improvement and self-development, Reading books, mostly fantasy, sci-fi and I love small attractions that makes you
            better mood.
          </p>
        </div>
      </div>
      <hr />
      <div className={classes.underlineText}>
        <div className={classes.lerningText}>
          <h2 className={classes.lerningH2}>I'm learning</h2>
          <ul className={classes.learningUl}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
          <ul className={classes.learningUl}>
            <li>React</li>
            <li>Figma for Design</li>
            {/* <li className={classes.learningList}>Adobe Photoshop</li> */}
          </ul>
        </div>

        <a className={classes.btnSeeMore} onClick={() => setHideCv()}>
          Hide me
        </a>
      </div>
    </div>
  );
};

export default SeeMorePage;
