import React from 'react';
import Rating from '../../../../components/rating/rating.component';

import styles from './profile-avatar.css';
import defaultAvatar from '../../../../../assets/images/default-avatar.svg'

const ProfileAvatar = props => {
  const { rating, avatarUrl } = props;

  return (
    <div className={styles['ava']}>
      <img
        src={avatarUrl || defaultAvatar}
        alt='Avatar'
        className={styles['ava__photo']}
      />
      <Rating className={styles['ava-rating']} score={rating || ''} />
    </div>
  );
};

export default ProfileAvatar;
