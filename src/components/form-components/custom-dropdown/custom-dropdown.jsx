import React from 'react';
import Select from 'react-select';

import styles from './custom-dropdown.css';

const CustomDropdown = props => {
  const {
    onChange,
    onBlur,
    id,
    type,
    placeholderText,
    options,
    prefill,
    className
  } = props;

  const handleChange = option => {
    // this is going to call setFieldValue and manually update values[id]
    onChange(id, option);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched[id]
    onBlur(id, true);
  };

  return (
    <Select
      id={id}
      className={`${styles['select-container']} ${
        type === 'small' ? styles['select--small'] : ''
      } ${className}`}
      classNamePrefix='select'
      onChange={handleChange}
      onBlur={handleBlur}
      value={prefill && { value: prefill.value, label: prefill.label }}
      placeholder={placeholderText}
      options={options}
      noOptionsMessage={value => <span></span>}
    />
  );
};

export default CustomDropdown;
