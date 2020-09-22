import React from 'react';
import ProfileBio from '../profile-bio/profile-bio.component';
import CalendarHOC from '../../../../../components/calendar/calendar.HOC';

import styles from '../profile-content.css';

const ProfileAbout = props => {
  const { bio, guideId } = props;

  return (
    <div className={styles['profile-content']}>
      <ProfileBio data={bio} />
      <CalendarHOC guideId={guideId} />
    </div>
  );
};

export default ProfileAbout;
