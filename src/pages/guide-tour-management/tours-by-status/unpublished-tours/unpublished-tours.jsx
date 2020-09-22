import React, { useEffect } from 'react';
import InfoCard from '../../info-card/info-card';

import styles from '../../guide-tour-management.css';

const UnpublishedTours = props => {
  const { unpublishedTours, getUnpublishedTours } = props;

  useEffect(() => {
    !unpublishedTours && getUnpublishedTours('unpublished');
  }, [unpublishedTours, getUnpublishedTours]);

  return (
    <div className={styles['card-list']}>
      {unpublishedTours &&
        unpublishedTours.length > 0 &&
        unpublishedTours.map((tour, index) => {
          return <InfoCard key={index + 1} data={tour} />;
        })}
    </div>
  );
};

export default UnpublishedTours;
