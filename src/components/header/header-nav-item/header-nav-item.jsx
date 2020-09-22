import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './header-nav-item.css';

const HeaderNavItem = props => {
  const { children, linkTo } = props;
  return (
    <NavLink
      exact
      to={linkTo}
      className={styles['nav__link']}
      activeClassName={styles['nav__link--active']}
    >
      {children}
    </NavLink>
  );
};

export default HeaderNavItem;
