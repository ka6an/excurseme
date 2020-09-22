import React, { useEffect } from 'react';
import InfoCard from '../../info-card/info-card';

import styles from '../../guide-tour-management.css';

const RejectedTours = props => {
  const { rejectedTours, getRejectedTours } = props;

  useEffect(() => {
    !rejectedTours && getRejectedTours('rejected');
  }, [rejectedTours, getRejectedTours]);

  return (
    <div className={styles['card-list']}>
      {rejectedTours &&
        rejectedTours.length > 0 &&
        rejectedTours.map((tour, index) => {
          return <InfoCard key={index + 1} data={tour} />;
        })}
    </div>
  );
};

export default RejectedTours;
