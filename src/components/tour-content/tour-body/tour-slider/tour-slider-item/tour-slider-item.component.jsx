import React from 'react';

import styles from './tour-slider-item.css';

const TourSliderItem = props => {
  const { imgUrl, alt, onClick, className } = props;
  return (
    <div className={`${styles['slider-item']} ${className || '' }`}>
      <img
        onClick={onClick || null}
        src={imgUrl || ''}
        alt={alt || 'Picture'}
      />
    </div>
  );
};

export default TourSliderItem;
