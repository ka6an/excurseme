import React, { useEffect } from 'react';
import InfoCard from '../../info-card/info-card';

import styles from '../../guide-tour-management.css';

const PendingTours = props => {
  const { pendingTours, getPendingTours } = props;

  useEffect(() => {
    !pendingTours && getPendingTours('pending');
  }, [pendingTours, getPendingTours]);

  return (
    <div className={styles['card-list']}>
      {pendingTours &&
        pendingTours.length > 0 &&
        pendingTours.map((tour, index) => {
          return <InfoCard key={index + 1} data={tour} />;
        })}
    </div>
  );
};

export default PendingTours;
