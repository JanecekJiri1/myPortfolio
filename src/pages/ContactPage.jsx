import classes from "./ContactPage.module.css";
import { FaEnvelope, FaFacebookF, FaMobileAlt, FaLinkedinIn } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.contactPageStyles}>
      <h2 className="contactText"> {t("contact_")} </h2>
      <ul className="contactList">
        <li>
          <a>
            <div className={classes.icons}>
              <FaEnvelope className={classes.envelop} />
            </div>
            <span> janec.jiri@email.cz</span>
          </a>
        </li>
        <li>
          <a>
            <div className={classes.icons}>
              <FaMobileAlt />
            </div>
            <span className={classes.phone}>+420 703 503 660</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/jiri.janecek.712/">
            <div className={classes.icons}>
              <FaFacebookF />
            </div>
            Jiří Janeček
          </a>
        </li>
        {/* <li>
          <a target="_blank" href="https://www.linkedin.com/in/jiří-janeček-63a521147/">
            <div className={classes.icons}>
              <FaLinkedinIn />
            </div>
            <strong>Linkedin:</strong> Jiří Janeček
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default ContactPage;
