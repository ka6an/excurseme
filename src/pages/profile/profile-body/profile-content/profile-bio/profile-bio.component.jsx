import React from 'react';
import ProfileBioItem from '../profile-bio-item/profile-bio-item.component';

import styles from './profile-bio.css';
import { SkeletonHOC } from '../../../../../utils';

const ProfileBio = props => {
  const { data } = props;
  return (
    <div className={styles['profile-bio']}>
      {data.map(({ title, text, divider }, index) => {
        let count = 4;
        title === 'Язык' && (count = 1);

        return text && text.length > 0 ? (
          <ProfileBioItem
            key={index + 1}
            title={title}
            text={text}
            divider={divider || null}
          />
        ) : (
          <div key={index + 1} style={{ marginTop: '20px' }}>
            <SkeletonHOC count={count} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileBio;
