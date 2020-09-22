import React from 'react';
import formStyles from '../form.css'
import styles from './autocomplete-field.css';
import CreatableSelect from 'react-select/creatable';

const AutocompleteField = props => {
  const { title, text, options, id, onChange, onBlur, data } = props;

  return (
    <div>
      <label className={formStyles['label']}>{title}</label>
      <p className={formStyles['text']}>{text}</p>
      <CreatableSelect
        id={id}
        className={styles['autocomplete-container']}
        classNamePrefix='autocomplete'
        isMulti
        options={options}
        onChange={value => {
          onChange(id, value);
        }}
        onBlur={onBlur}
        formatCreateLabel={value => <span>{value}</span>}
        value={
          data && [
            ...data.map(option => ({
              value: option.value,
              label: option.label
            }))
          ]
        }
        placeholder=''
        noOptionsMessage={value => <span>Такой тэг уже добавлен</span>}
      />
    </div>
  );
};

export default AutocompleteField;
