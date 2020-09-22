import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

import ROUTES from '../../../../router-constants/app.routes';

import formStyles from '../../../../components/form-components/form.css';
import styles from './description-form.css';

import CustomDropdown from '../../../../components/form-components/custom-dropdown/custom-dropdown.jsx';
import CustomCheckbox from '../../../../components/form-components/custom-checkbox/custom-checkbox';
import AutocompleteField from '../../../../components/form-components/autocomplete-field/autocomplete-field';
import CustomButton from '../../../../components/form-components/custom-button/custom-button';

class DescriptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsInHours: this.getDurationsValueInHours(),
      optionsInMinutes: this.getDurationsValueInMinutes(
        this.props.hubData.slots_interval
      )
    };
  }

  componentWillUnmount() {
    const { values, isValid, setDescriptionStageState } = this.props;
    setDescriptionStageState(values, isValid);
  }

  setDescriptionStageStateAndSubmitForm = () => {
    const {
      values,
      isValid,
      setDescriptionStageState,
      handleSubmit
    } = this.props;
    new Promise(resolve => {
      setDescriptionStageState(values, isValid);
      resolve();
    }).then(() => handleSubmit());
  };

  setDescriptionStageStateAndSetTourOnVerification = () => {
    const {
      values,
      isValid,
      setDescriptionStageState,
      setTourOnVerification
    } = this.props;
    new Promise(resolve => {
      setDescriptionStageState(values, isValid);
      resolve();
    }).then(() => setTourOnVerification());
  };

  getDurationsValueInHours = () => {
    let options = [];

    for (let i = 0; i < 25; i++) {
      options.push({
        value: 60 * i,
        label: i.toString()
      });
    }

    return options;
  };

  getDurationsValueInMinutes = interval => {
    let options = [];

    for (let i = 0; i < 60 / interval; i++) {
      options.push({
        value: interval * i,
        label: (interval * i).toString()
      });
    }

    return options;
  };

  render() {
    const {
      values,
      touched,
      errors,
      setFieldValue,
      setFieldTouched,
      isValid,
      location,
      hubData
    } = this.props;

    return (
      <Form className={formStyles['form']}>
        <div
          className={`${formStyles['group']} ${formStyles['group--required']}`}
        >
          <label htmlFor='name' className={formStyles['label']}>
            Название экскурсии
          </label>
          <Field
            name='name'
            className={`${formStyles['input']} ${
              touched.name && errors.name ? formStyles['input--invalid'] : ''
            }`}
          />
          <ErrorMessage
            name='name'
            component='p'
            className={formStyles['invalid-feedback']}
          />
        </div>
        <div
          className={`${formStyles['group']} ${formStyles['group--required']}`}
        >
          <label htmlFor='description' className={formStyles['label']}>
            Описание
          </label>
          <Field
            name='description'
            className={`${formStyles['textarea']} ${
              touched.description && errors.description
                ? formStyles['input--invalid']
                : ''
            }`}
            as='textarea'
            type='text'
          />
          <ErrorMessage
            name='description'
            component='p'
            className={formStyles['invalid-feedback']}
          />
        </div>
        <div
          className={`${formStyles['group']} ${formStyles['group--half']} ${formStyles['group--required']}`}
        >
          <label htmlFor='language' className={formStyles['label']}>
            Язык
          </label>
          <Field
            id='language'
            component={CustomDropdown}
            prefill={values.language}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            placeholderText='Не выбрано'
            options={hubData.languages}
            className={`${
              touched.language && errors.language
                ? formStyles['select--invalid']
                : ''
            }`}
          />
        </div>
        <div
          className={`${formStyles['group']} ${formStyles['group--half']} ${formStyles['group--required']}`}
        >
          <label htmlFor='duration' className={formStyles['label']}>
            Длительность
          </label>
          <div className={styles['form-select-wrap']}>
            <Field
              id='duration'
              component={CustomDropdown}
              prefill={values.duration}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              placeholderText='0'
              type='small'
              className={`${
                touched.duration && errors.duration
                  ? formStyles['select--invalid']
                  : ''
              }`}
              options={this.state.optionsInHours}
            />
            <p className={styles['form-select__text']}>ч.</p>
            <Field
              id='durationSecondary'
              component={CustomDropdown}
              prefill={values.durationSecondary}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              placeholderText='0'
              type='small'
              className={`${
                touched.durationSecondary && errors.durationSecondary
                  ? formStyles['select--invalid']
                  : ''
              }`}
              options={this.state.optionsInMinutes}
            />
            <p className={styles['form-select__text']}>м.</p>
          </div>
        </div>
        <div
          className={`${formStyles['group']} ${formStyles['group--half']} ${formStyles['group--required']}`}
        >
          <CustomCheckbox
            title={'Тип экскурсии'}
            id='type'
            value={values.type}
            onChange={setFieldValue}
            options={hubData.tour_types.map(option => ({
              value: option.id,
              label: option.label
            }))}
          />
        </div>
        <div
          className={`${formStyles['group']} ${formStyles['group--half']} ${formStyles['group--required']}`}
        >
          <CustomCheckbox
            title={'Возрастные ограничения'}
            id='min_age'
            value={values.min_age}
            onChange={setFieldValue}
            options={hubData.age_limits.map(option => ({
              value: option.id,
              label: option.label
            }))}
          />
        </div>
        <div className={formStyles['group']}>
          <AutocompleteField
            id='tags'
            data={values.tags}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            title={'Тэги'}
            text={
              'Введите от 3 до 5 тегов к экскурсии, так вашу экскурсию увидят больше людей.'
            }
            options={hubData.tags.map(option => ({
              value: option.id,
              label: option.label
            }))}
          />
        </div>
        {location.pathname ===
        `${ROUTES.TOUR_MANAGEMENT.BASE}${ROUTES.TOUR_MANAGEMENT.CREATION}` ? (
          <div className={formStyles['buttons']}>
            <CustomButton
              isActive={isValid}
              primary={true}
              onClick={this.setDescriptionStageStateAndSubmitForm}
              type='submit'
            >
              Создать
            </CustomButton>
          </div>
        ) : (
          <div className={formStyles['buttons']}>
            <CustomButton
              isActive={isValid}
              secondary={true}
              onClick={this.setDescriptionStageStateAndSubmitForm}
            >
              Сохранить
            </CustomButton>
            <CustomButton
              isActive={isValid}
              primary={true}
              onClick={this.setDescriptionStageStateAndSetTourOnVerification}
            >
              На проверку
            </CustomButton>
          </div>
        )}
      </Form>
    );
  }
}

export default DescriptionForm;
