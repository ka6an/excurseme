import React, { useEffect } from 'react';
import TourHeader from './tour-header/tour-header.component';
import TourBodyHOC from './tour-body/tour-body.HOC';

import styles from './tour-content.css';

const TourContent = props => {
  const { tourData, clearCurrentTourData } = props;

  useEffect(() => {
    return () => clearCurrentTourData();
  }, []);

  return (
    <div className={styles['content']}>
      <TourHeader
        serialNumber={tourData && tourData.id}
        status={tourData && tourData.status}
      />
      <TourBodyHOC tourData={tourData} />
    </div>
  );
};

export default TourContent;
