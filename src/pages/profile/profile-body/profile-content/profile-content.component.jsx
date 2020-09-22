import React from 'react';
import ProfileBioHOC from './profile-bio/profile-bio.HOC';
import TourCardList from '../../../../components/tour-card-list/tour-card-list.component';
import ReviewsList from '../../../../components/reviews-list/reviews-list.component';
import EmptyMessage from '../../../../components/empty-message/empty-message.component';

import styles from './profile-content.css';

const ProfileContent = props => {
  const {
    tourList,
    reviewList,
    bio,
    emptyMessageIconName,
    emptyMessageText
  } = props;

  return (
    <div className={styles['profile-content']}>
      {reviewList && !reviewList.length && (
        <EmptyMessage
          iconName={emptyMessageIconName}
          message={emptyMessageText}
        />
      )}
      <ProfileBioHOC data={bio} />
      <TourCardList tourList={tourList} />
      <ReviewsList list={reviewList} />
    </div>
  );
};

export default ProfileContent;
