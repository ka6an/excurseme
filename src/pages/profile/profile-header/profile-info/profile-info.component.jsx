import React from 'react';

import ProfileInfoItem from '../profile-info-item/profile-info-item.component';

import styles from './profile-info.css';

const ProfileInfo = props => {
  const { stats } = props;
  return (
    <div className={styles['profile-guide-info']}>
      <ProfileInfoItem
        text={'проведено экскурсий'}
        amount={stats && stats.tours}
      />
      <ProfileInfoItem
        text={'продано билетов'}
        amount={stats && stats.tickets}
      />
    </div>
  );
};

export default ProfileInfo;
