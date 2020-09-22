import React from 'react';

import styles from './custom-button.css';

const CustomButton = props => {
  const { children, primary, secondary, onClick, isActive, type } = props;
  return (
    <button
      type={type ? type : 'button'}
      className={
        isActive
          ? (primary && `${styles['button']} ${styles['button--primary']}`) ||
            (secondary && `${styles['button']} ${styles['button--second']}`)
          : `${styles['button']} ${styles['button--inactive']}`
      }
      onClick={isActive ? onClick : () => null}
    >
      {children}
    </button>
  );
};

export default CustomButton;
