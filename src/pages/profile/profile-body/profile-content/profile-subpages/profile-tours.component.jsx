import React from 'react';

import TourCardList from '../../../../../components/tour-card-list/tour-card-list.component';

import styles from '../profile-content.css';

const ProfileTours = props => {
  const {
    tourList,
    emptyMessageIconName,
    emptyMessageText
  } = props;

  return (
    <div className={styles['profile-content']}>
      <TourCardList
        tourList={tourList}
        iconName={emptyMessageIconName}
        message={emptyMessageText}
      />
    </div>
  );
};

export default ProfileTours;
