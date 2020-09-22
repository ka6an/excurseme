import React from 'react';
import ProfileAvatar from './profile-avatar/profile-avatar.component';
import ProfileOverviewHOC from './profile-overview/profile-overview.HOC';
import ProfileInfo from './profile-info/profile-info.component';

import styles from './profile-header.css';

class ProfileHeader extends React.Component {
  getFullname = (first, middle, last) => {
    return `${first} ${middle ? middle : ''} ${last}`;
  };
  render() {
    const {
      firstName,
      middleName,
      lastName,
      rating,
      avatarUrl,
      category,
      stats,
      socials
    } = this.props.headerData;
    return (
      <div className={styles['profile-header']}>
        <ProfileAvatar rating={rating} avatarUrl={avatarUrl} />
        <ProfileOverviewHOC
          guideFullname={
            firstName &&
            lastName &&
            this.getFullname(firstName, middleName, lastName)
          }
          category={category}
          socials={socials}
        />
        <ProfileInfo stats={stats} />
      </div>
    );
  }
}

export default ProfileHeader;
