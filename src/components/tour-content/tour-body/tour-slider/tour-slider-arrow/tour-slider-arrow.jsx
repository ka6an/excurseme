import React from 'react';

const TourSliderArrow = props => {
  const { customClass, customStyle, onClick } = props;
  return (
    <div
      className={customClass}
      style={customStyle || null}
      onClick={onClick}
    />
  );
};

export default TourSliderArrow;
