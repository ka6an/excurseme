import React from 'react';
import TourCardHOC from './tour-card/tour-card.HOC';
import EmptyMessage from '../empty-message/empty-message.component';

import styles from './tour-card-list.css';

const TourCardList = props => {
  const { tourList, iconName, message } = props;
  return (
    tourList && tourList.length > 0 ? (
      <div className={styles['card-list']}>
        {tourList.map(
          ({
            id,
            name,
            price,
            duration,
            participants,
            rating,
            preview_url,
            conducted_counter,
            reviews_total
          }) => {
            return (
              <TourCardHOC
                key={id}
                tourId={id}
                ratingScore={rating}
                amountOfCompleteExcursions={conducted_counter}
                title={name}
                duration={duration}
                participants={participants}
                previewUrl={preview_url}
                price={price}
                reviewsTotal={reviews_total}
              />
            );
          }
        )}
      </div>
    ) : (
      <EmptyMessage
        iconName={iconName}
        message={message}
      />
    )
  );
};

export default TourCardList;
