import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../../../components/styles.css';

const ProfileTabItem = props => {
  const { description, linkTo } = props;
  const placeholder = 'Missing desc';
  return (
    <li className={styles['tab-item']}>
      <NavLink
        exact
        to={linkTo}
        className={styles['tab__link']}
        activeClassName={styles['tab__link--active']}
      >
        {description || placeholder}
      </NavLink>
    </li>
  );
};

export default ProfileTabItem;
