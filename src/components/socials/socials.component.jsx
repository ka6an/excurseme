import React from 'react';
import CustomIcon from '../custom-icon/custom-icon.component';

import styles from './socials.css';

const Socials = props => {
  const { socials } = props;
  return (
    <div className={styles['socials']}>
      <a
        href={socials.facebook_url}
        className={styles['socials__item']}
      >
        <CustomIcon className={styles['socials__icon']} iconName='fb' />
      </a>
      <a
        href={socials.twitter_url}
        className={styles['socials__item']}
      >
        <CustomIcon className={styles['socials__icon']} iconName='tw' />
      </a>
      <a
        href={socials.vk_url}
        className={styles['socials__item']}
      >
        <CustomIcon className={styles['socials__icon']} iconName='vk' />
      </a>
    </div>
  );
};

export default Socials;
