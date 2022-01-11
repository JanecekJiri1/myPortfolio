import { Link } from "react-router-dom";

import classes from "./ContactIn.module.css";

const ContactIn = () => {
  return (
    <div>
      <hr />
      <div className={classes.contactInStyles}>
        <Link to="/contact">
          <h2>All my contact information</h2>

          <span>
            <h2>Contact </h2>
            <p> just click</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ContactIn;
