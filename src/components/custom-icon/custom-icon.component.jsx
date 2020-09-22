import React from 'react';

import styles from './custom-icon.css';

const CustomIcon = props => {
  const { className, iconName } = props;
  return (
    <i
      className={`
      	${styles[`icon`]}
      	${styles[`icon-${iconName}`]}
      	${className || ''}
      `}
    />
  );
};

export default CustomIcon;
