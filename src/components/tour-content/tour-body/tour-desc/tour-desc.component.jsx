import React from 'react';
import groupStyles from '../../../../pages/profile/profile-body/profile-content/profile-bio-item/profile-bio-item.css'

const TourDesc = props => {
  const { title, text } = props;
  return (
    <div className={groupStyles['group']}>
      <h2 className={groupStyles['group__label']}>{title}</h2>
      <p className={groupStyles['group__text']}>{text}</p>
    </div>
  );
};

export default TourDesc;
