import React, { useEffect } from 'react';
import InfoCard from '../../info-card/info-card';

import styles from '../../guide-tour-management.css';

const DraftTours = props => {
  const { draftTours, getDraftTours } = props;

  useEffect(() => {
    !draftTours && getDraftTours('draft');
  }, [draftTours, getDraftTours]);

  return (
    <div className={styles['card-list']}>
      {draftTours &&
        draftTours.length > 0 &&
        draftTours.map((tour, index) => {
          return <InfoCard key={index + 1} data={tour} />;
        })}
    </div>
  );
};

export default DraftTours;
