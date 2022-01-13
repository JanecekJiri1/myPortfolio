import classes from "./SeeMorePage.module.css";
import { useTranslation } from "react-i18next";

const SeeMorePage = ({ setHideCv }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.seeMorePage}>
      <h2 className={classes.topHeader}>{t("about_more_h2")}</h2>
      <div className={classes.seeMoreStyles}>
        <div className={classes.seeLeftSide}>
          <div className="textResumeLeft">
            <p>
              <h3>{t("about_education")}</h3>
              {t("about_education_name")}
            </p>
            <br />
            <p>
              <h3>{t("about_work_experience")}</h3>
              {t("about_work_text")}
            </p>
          </div>
        </div>

        <div className={classes.seeRightSide}>
          <ul className={classes.languageUl}>
            <h3> {t("language_skills")}</h3>
            <li>
              <strong> {t("czech_language")}</strong> - {t("cs_language_skill")}
            </li>
            <li>
              <strong>{t("english_language")}</strong> - {t("en_language_skill")}
            </li>
          </ul>
          <br />
          <h3> {t("about_hobbies")}</h3>
          <p>{t("about_hobbies_text")}</p>
        </div>
      </div>
      <hr />
      <div className={classes.underlineText}>
        <div className={classes.lerningText}>
          <h2 className={classes.lerningH2}> {t("i_learning")}</h2>
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
          {t("btn_hide")}
        </a>
      </div>
    </div>
  );
};

export default SeeMorePage;
