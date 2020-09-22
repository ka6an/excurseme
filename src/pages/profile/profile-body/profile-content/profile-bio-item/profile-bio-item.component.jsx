import React from 'react';

import styles from './profile-bio-item.css';

const ProfileBioItem = props => {
  const { title, text, divider } = props;

  return (
    <div className={`${styles['group']} ${divider ? styles['group--divider'] : ''}`}>
      <h2 className={styles['group__label']}>{title}</h2>
      <p className={styles['group__text']}>{text}</p>
    </div>
  );
};

export default ProfileBioItem;
