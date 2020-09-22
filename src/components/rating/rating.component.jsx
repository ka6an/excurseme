import React from 'react';
import CustomIcon from '../custom-icon/custom-icon.component';

import styles from './rating.css';

const Rating = props => {
  const { score, type, label, className } = props;

  return (
    <div className={`
        ${styles['rating']}
        ${type && type.length > 0 ? styles['rating--' + type] : ''}
        ${className || ''}
      `}
    >
      {label && label.length > 0 && <p className={styles['rating__label']}>{label}</p>}
      <CustomIcon className={styles['rating__icon']} iconName='star' />
      <p>{score}</p>
    </div>
  );
};

export default Rating;
