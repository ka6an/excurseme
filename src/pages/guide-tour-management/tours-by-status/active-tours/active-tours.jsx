import React, { useEffect } from 'react';
import InfoCard from '../../info-card/info-card';

import styles from '../../guide-tour-management.css';

const ActiveTours = props => {
  const { activeTours, getActiveTours } = props;

  useEffect(() => {
    !activeTours && getActiveTours('active');
  }, [activeTours, getActiveTours]);

  return (
    <div className={styles['card-list']}>
      {activeTours &&
        activeTours.length > 0 &&
        activeTours.map((tour, index) => {
          return <InfoCard key={index + 1} data={tour} />;
        })}
    </div>
  );
};

export default ActiveTours;
