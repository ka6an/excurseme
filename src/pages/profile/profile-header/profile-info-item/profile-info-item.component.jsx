import React from 'react';
import { SkeletonHOC } from '../../../../utils';
import styles from './profile-info-item.css';

const ProfileInfoItem = props => {
  const { text, amount } = props;
  return (
    <div className={styles['profile-guide-info-item']}>
      <p className={styles['profile-guide-info__text']}>
        {text || <SkeletonHOC width={135} />}
      </p>
      <p className={styles['profile-guide-info__amount']}>
        {amount || <SkeletonHOC width={135} />}
      </p>
    </div>
  );
};

export default ProfileInfoItem;
