import React from 'react';
import { Spinner } from 'reactstrap';

const CustomSpinner = props => {
  const { color, sizePixel } = props;
  return (
    <Spinner
      color={color}
      style={{ width: `${sizePixel}px`, height: `${sizePixel}px` }}
    />
  );
};

export default CustomSpinner;
