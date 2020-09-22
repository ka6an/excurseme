import React from "react";
import Logo from "../logo/logo";

import styles from "./header.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Logo />
    </header>
  );
};

export default Header;
