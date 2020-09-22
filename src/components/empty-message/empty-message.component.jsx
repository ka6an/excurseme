import React from 'react';
import CustomIcon from '../custom-icon/custom-icon.component';

import styles from './empty-message.css';

const EmptyMessage = props => {
  const { message, iconName } = props;
  return (
    <div className={styles['empty']}>
      <CustomIcon className={styles['empty__icon']} iconName={iconName}></CustomIcon>
      <p className={styles['empty__text']}>{message}</p>
    </div>
  );
};

export default EmptyMessage;
