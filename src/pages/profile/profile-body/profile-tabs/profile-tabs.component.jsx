import React from 'react';

import ROUTES from '../../../../router-constants/app.routes';

import ProfileTabItem from '../profile-tab-item/profile-tab-item.component';

import styles from '../../../../components/styles.css';

const ProfileTabs = props => {
  const { guideId } = props;
  return (
    <ul className={styles['tabs']}>
      <ProfileTabItem
        linkTo={`${ROUTES.GUIDE.PROFILE}/${guideId}`}
        description='О гиде'
      />
      <ProfileTabItem
        linkTo={`${ROUTES.GUIDE.PROFILE}/${guideId}${ROUTES.GUIDE.TOURS}`}
        description='Экскурсии'
      />
      <ProfileTabItem
        linkTo={`${ROUTES.GUIDE.PROFILE}/${guideId}${ROUTES.GUIDE.REVIEWS}`}
        description='Отзывы'
      />
    </ul>
  );
};

export default ProfileTabs;
