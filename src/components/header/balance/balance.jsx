import React from 'react';
import styles from './balance.css';
import CustomIcon from '../../custom-icon/custom-icon.component';

const Balance = props => {
  const { amount } = props;
  return (
    <>
      <span className={styles['balance__text']}>
        <CustomIcon className={styles['balance__icon']} iconName='balance' />
        Баланс:
      </span>
      <span>{amount}</span>
    </>
  );
};

export default Balance;
