import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SkeletonHOC } from '../../../utils';

import CustomIcon from '../../custom-icon/custom-icon.component';

import styles from './tour-header.css';
import ROUTES from '../../../router-constants/app.routes';

const TourHeader = props => {
  const { serialNumber, status } = props;
  const location = useLocation();
  const guideId = location.pathname.split('/')[2];

  return (
    <div className={styles['header']}>
      <div className={styles['header-back']}>
        <CustomIcon className={styles['header-back__icon']} iconName='arrow-gray'></CustomIcon>
        <Link
          to={`${ROUTES.GUIDE.PROFILE}/${guideId}${ROUTES.GUIDE.TOURS}`}
          className={styles['header__link']}
        >
          Назад к экскурсиям
        </Link>
      </div>
      <div className={styles['header-info']}>
        <p className={styles['header__number']}>
          {serialNumber ? `№ ${serialNumber}` : `№ -`}
        </p>
        <p
          className={`${styles['header__status']} ${styles['header__status--active']}`}
        >
          {(status && status.label) || <SkeletonHOC />}
        </p>
      </div>
    </div>
  );
};

export default TourHeader;
