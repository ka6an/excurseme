import React from "react";
import { Link } from "react-router-dom";

import styles from "./logo.css";

const Logo = () => {
  return (
    <Link to="/" className={styles["header-logo"]}>
      <img
        src="/assets/images/logo.svg"
        alt="Logo"
        className={styles["header-logo__img"]}
      />
    </Link>
  );
};

export default Logo;
