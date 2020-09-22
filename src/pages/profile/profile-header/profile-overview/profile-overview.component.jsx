import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Socials from '../../../../components/socials/socials.component';

import styles from './profile-overview.css';

const ProfileOverview = props => {
  const { guideFullname, category, socials, isLoading } = props;
  return (
    <div className={styles['profile-guide-overview']}>
      <p className={styles['profile-guide-overview__top']}>
      {isLoading
       ? <Skeleton height={12} width={40} />
       : category
      }
      </p>
      <h1 className={styles['profile-guide-overview__name']}>
        {guideFullname || <Skeleton height={16} count={2} />}
      </h1>
      <Socials socials={socials} />
    </div>
  );
};

export default ProfileOverview;
