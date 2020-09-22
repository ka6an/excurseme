import React from 'react';

import formStyles from '../form.css';
import styles from './custom-checkbox.css';

const CustomCheckbox = props => {
  const { title, options, id, value, onChange } = props;

  return (
    <div>
      <label className={formStyles['label']}>{title}</label>
      <div className={styles['radio-list']}>
        {options &&
          options.map((option, index) => (
            <div key={index + 1} className={styles['radio']}>
              <input
                type='radio'
                name={`radio-tour-type-${id}`}
                className={styles['radio__input']}
                id={`${id}-${index + 1}`}
                onChange={() => {
                  onChange(id, option.value);
                }}
                checked={value === option.value}
              />
              <label
                htmlFor={`${id}-${index + 1}`}
                className={styles['radio__label']}
              >
                {option.label}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomCheckbox;
