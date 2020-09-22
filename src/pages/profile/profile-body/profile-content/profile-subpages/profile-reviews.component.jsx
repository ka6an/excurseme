import React from 'react';

import ReviewsList from '../../../../../components/reviews-list/reviews-list.component';
import EmptyMessage from '../../../../../components/empty-message/empty-message.component';

import styles from '../profile-content.css';

const ProfileReviews = props => {
  const {
    reviewList,
    shouldShowEmptyMessage,
    emptyMessageIconName,
    emptyMessageText
  } = props;

  return (
    <div className={styles['profile-content']}>
      {reviewList && !reviewList.length && (
        <EmptyMessage
          iconName={emptyMessageIconName}
          shouldShow={shouldShowEmptyMessage}
          message={emptyMessageText}
        />
      )}
      <ReviewsList list={reviewList} />
    </div>
  );
};

export default ProfileReviews;
